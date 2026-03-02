// ============================================================
// app.js — Life of Jesus: Map Application
// ArcGIS-powered interactive map with city markers, routes,
// scripture panel, bottom sheet, and bilingual support
// ============================================================

import { phases, cities, routes, scriptureIndex, allChapters } from "./data.js";
import {
  getLang, setLang, t, phaseText, cityText, eventText,
  displayVerse, displayChapter, geoLabels
} from "./i18n.js";

// ── Optional ArcGIS API key (leave empty for CartoDB fallback) ──
const ARCGIS_API_KEY = "";

// ── State ────────────────────────────────────────────────
let activePhase = "all";         // "all" or integer 1-4
let showBiblicalNames = true;
let selectedCity = null;
let selectedChapter = null;

// ── ArcGIS modules (loaded dynamically) ──────────────────
let Map, MapView, GraphicsLayer, Graphic, Point, Polyline;
let SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol;
let WebTileLayer, Basemap, esriConfig, reactiveUtils;

// ── Layers & View ────────────────────────────────────────
let view, geoLayer, routeLayer, cityLayer, labelLayer;

// ══════════════════════════════════════════════════════════
// LANGUAGE SELECTOR
// ══════════════════════════════════════════════════════════
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.lang);
    document.getElementById("language-selector").style.display = "none";
    startApp();
  });
});

// ══════════════════════════════════════════════════════════
// APP INITIALIZATION
// ══════════════════════════════════════════════════════════
async function startApp() {
  const splash = document.getElementById("splash-screen");
  splash.classList.add("active");
  updateSplash();
  updateUIStrings();

  const fill = document.getElementById("progress-fill");
  fill.style.width = "20%";

  try {
    // Load ArcGIS modules
    [
      Map, MapView, GraphicsLayer, Graphic, Point, Polyline,
      SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol,
      WebTileLayer, Basemap, esriConfig, reactiveUtils
    ] = await Promise.all([
      $arcgis.import("esri/Map"),
      $arcgis.import("esri/views/MapView"),
      $arcgis.import("esri/layers/GraphicsLayer"),
      $arcgis.import("esri/Graphic"),
      $arcgis.import("esri/geometry/Point"),
      $arcgis.import("esri/geometry/Polyline"),
      $arcgis.import("esri/symbols/SimpleMarkerSymbol"),
      $arcgis.import("esri/symbols/SimpleLineSymbol"),
      $arcgis.import("esri/symbols/TextSymbol"),
      $arcgis.import("esri/layers/WebTileLayer"),
      $arcgis.import("esri/Basemap"),
      $arcgis.import("esri/config"),
      $arcgis.import("esri/core/reactiveUtils")
    ]);

    fill.style.width = "60%";

    if (ARCGIS_API_KEY) {
      esriConfig.apiKey = ARCGIS_API_KEY;
    }

    await initMap();
    fill.style.width = "90%";

    buildChipBar();
    bindUIEvents();
    buildAboutLegend();
    refresh();

    fill.style.width = "100%";
    setTimeout(() => {
      splash.classList.remove("active");
      splash.style.display = "none";
    }, 400);
  } catch (err) {
    console.error("Failed to initialize:", err);
    fill.style.width = "100%";
    fill.style.background = "#A34B4B";
  }
}

// ══════════════════════════════════════════════════════════
// MAP INITIALIZATION
// ══════════════════════════════════════════════════════════
async function initMap() {
  geoLayer = new GraphicsLayer();
  routeLayer = new GraphicsLayer();
  cityLayer = new GraphicsLayer();
  labelLayer = new GraphicsLayer();

  let basemap;
  if (ARCGIS_API_KEY) {
    basemap = "arcgis/human-geography-dark";
  } else {
    const tileLayer = new WebTileLayer({
      urlTemplate:
        "https://basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
      copyright: "CartoDB"
    });
    basemap = new Basemap({ baseLayers: [tileLayer] });
  }

  const map = new Map({
    basemap,
    layers: [geoLayer, routeLayer, cityLayer, labelLayer]
  });

  view = new MapView({
    container: "viewDiv",
    map,
    center: [35.0, 31.8],
    zoom: 7,
    constraints: { minZoom: 5, maxZoom: 15 },
    ui: { components: [] },
    popup: { autoOpenEnabled: false }
  });

  await view.when();

  // Click handler
  view.on("click", async (event) => {
    const response = await view.hitTest(event);
    const hit = response.results.find(
      (r) => r.graphic?.layer === cityLayer && r.graphic.attributes?.cityId
    );
    if (hit) {
      const city = cities.find((c) => c.id === hit.graphic.attributes.cityId);
      if (city) selectCity(city);
    } else {
      closeBottomSheet();
    }
  });
}

// ══════════════════════════════════════════════════════════
// DRAWING FUNCTIONS
// ══════════════════════════════════════════════════════════

function refresh() {
  drawGeoLabels();
  drawRoutes();
  drawCities();
}

// ── Geographic Labels ────────────────────────────────────
function drawGeoLabels() {
  geoLayer.removeAll();
  if (ARCGIS_API_KEY) return; // ArcGIS basemap has its own labels

  const lang = getLang();
  const labels = geoLabels[lang] || geoLabels.en;

  // Seas (blue, italic)
  for (const sea of labels.seas) {
    geoLayer.add(
      new Graphic({
        geometry: new Point({ longitude: sea.lng, latitude: sea.lat }),
        symbol: new TextSymbol({
          text: sea.name,
          color: [100, 140, 180, 0.6],
          font: { size: sea.size, family: "Inter", style: "italic" },
          haloColor: [26, 17, 25, 0.9],
          haloSize: 2
        })
      })
    );
  }

  // Regions (brown, uppercase)
  for (const region of labels.regions) {
    geoLayer.add(
      new Graphic({
        geometry: new Point({ longitude: region.lng, latitude: region.lat }),
        symbol: new TextSymbol({
          text: region.name,
          color: [160, 130, 100, 0.45],
          font: { size: region.size, family: "Inter", weight: "bold" },
          haloColor: [26, 17, 25, 0.9],
          haloSize: 2
        })
      })
    );
  }
}

// ── Routes ───────────────────────────────────────────────
function drawRoutes() {
  routeLayer.removeAll();

  for (const route of routes) {
    if (activePhase !== "all" && route.phase !== activePhase) continue;

    const phase = phases.find((p) => p.id === route.phase);
    if (!phase) continue;

    const color = [...phase.color, 220];
    const dimColor = [...phase.color, activePhase === "all" ? 160 : 220];

    // Outbound (solid)
    if (route.outbound) {
      routeLayer.add(
        new Graphic({
          geometry: new Polyline({
            paths: [route.outbound.map(([lng, lat]) => [lng, lat])]
          }),
          symbol: new SimpleLineSymbol({
            color: dimColor,
            width: activePhase === "all" ? 2.5 : 3,
            style: "solid"
          })
        })
      );
    }

    // Return (dashed)
    if (route.returnPath) {
      routeLayer.add(
        new Graphic({
          geometry: new Polyline({
            paths: [route.returnPath.map(([lng, lat]) => [lng, lat])]
          }),
          symbol: new SimpleLineSymbol({
            color: [...phase.color, 150],
            width: activePhase === "all" ? 2 : 2.5,
            style: "dash"
          })
        })
      );
    }
  }
}

// ── Cities ───────────────────────────────────────────────
function drawCities() {
  cityLayer.removeAll();
  labelLayer.removeAll();

  const filtered = getFilteredCities();
  const currentZoom = view?.zoom || 7;

  for (const city of cities) {
    const isFiltered = filtered.has(city.id);
    const alpha = isFiltered ? 255 : 38;
    const point = new Point({ longitude: city.lng, latitude: city.lat });

    // Determine marker color — use first matching phase color
    let markerColor;
    if (activePhase !== "all") {
      const phase = phases.find((p) => p.id === activePhase);
      markerColor = phase ? [...phase.color, alpha] : [201, 168, 76, alpha];
    } else {
      const firstPhase = phases.find((p) => city.phases.includes(p.id));
      markerColor = firstPhase
        ? [...firstPhase.color, alpha]
        : [201, 168, 76, alpha];
    }

    // Marker size by significance
    const size =
      city.significance === "major" ? 16 :
      city.significance === "moderate" ? 13 : 10;

    // Glow (major cities only, when filtered)
    if (city.significance === "major" && isFiltered) {
      cityLayer.add(
        new Graphic({
          geometry: point,
          symbol: new SimpleMarkerSymbol({
            style: "circle",
            color: [...markerColor.slice(0, 3), 40],
            size: size + 12,
            outline: { color: [0, 0, 0, 0], width: 0 }
          })
        })
      );
    }

    // Selection ring
    if (selectedCity?.id === city.id) {
      cityLayer.add(
        new Graphic({
          geometry: point,
          symbol: new SimpleMarkerSymbol({
            style: "circle",
            color: [0, 0, 0, 0],
            size: size + 8,
            outline: { color: [201, 168, 76, 255], width: 2 }
          })
        })
      );
    }

    // Main marker
    cityLayer.add(
      new Graphic({
        geometry: point,
        symbol: new SimpleMarkerSymbol({
          style: "circle",
          color: markerColor,
          size,
          outline: {
            color: [...markerColor.slice(0, 3), Math.min(alpha + 30, 255)],
            width: 1
          }
        }),
        attributes: { cityId: city.id }
      })
    );

    // Stop number for active phase
    if (activePhase !== "all" && isFiltered) {
      const event = city.events.find((e) => e.phase === activePhase);
      if (event) {
        cityLayer.add(
          new Graphic({
            geometry: point,
            symbol: new TextSymbol({
              text: String(event.order),
              color: [26, 17, 25, 255],
              font: { size: 8, family: "Inter", weight: "bold" },
              yoffset: 0
            })
          })
        );
      }
    }

    // City name label
    if (isFiltered && (city.significance !== "minor" || currentZoom > 8)) {
      const lang = getLang();
      let name;
      if (showBiblicalNames) {
        name = cityText(city.id, "biblicalName") || city.biblicalName;
      } else {
        name = cityText(city.id, "modernName") || city.modernName;
      }

      const isMajor = city.significance === "major";
      labelLayer.add(
        new Graphic({
          geometry: point,
          symbol: new TextSymbol({
            text: name,
            color: isMajor
              ? [240, 230, 214, 230]
              : [200, 190, 170, 180],
            font: {
              size: isMajor ? 11 : 9,
              family: isMajor ? "Cinzel" : "Inter",
              weight: isMajor ? "bold" : "normal"
            },
            haloColor: [26, 17, 25, 200],
            haloSize: 2,
            yoffset: -(size / 2 + 10)
          })
        })
      );
    }
  }
}

// ── Filtering ────────────────────────────────────────────
function getFilteredCities() {
  const set = new Set();

  for (const city of cities) {
    let match = false;

    if (activePhase === "all") {
      match = true;
    } else {
      match = city.phases.includes(activePhase);
    }

    if (match && selectedChapter) {
      const entries = scriptureIndex[selectedChapter] || [];
      match = entries.some((e) => e.cityId === city.id);
    }

    if (match) set.add(city.id);
  }

  return set;
}

// ══════════════════════════════════════════════════════════
// CHIP BAR
// ══════════════════════════════════════════════════════════
function buildChipBar() {
  const bar = document.getElementById("chip-bar");
  bar.innerHTML = "";

  // "All Phases" chip
  const allChip = document.createElement("button");
  allChip.className = "chip" + (activePhase === "all" ? " active" : "");
  allChip.textContent = t("allPhases");
  allChip.addEventListener("click", () => {
    activePhase = "all";
    selectedChapter = null;
    closeBottomSheet();
    buildChipBar();
    refresh();
    zoomToOverview();
  });
  bar.appendChild(allChip);

  // Phase chips
  for (const phase of phases) {
    const chip = document.createElement("button");
    chip.className = "chip" + (activePhase === phase.id ? " active" : "");

    const dot = document.createElement("span");
    dot.className = "dot";
    dot.style.background = phase.hexColor;
    chip.appendChild(dot);

    const label = phaseText(phase.id, "shortName") || phase.shortName;
    chip.appendChild(document.createTextNode(label));

    chip.addEventListener("click", () => {
      activePhase = phase.id;
      selectedChapter = null;
      closeBottomSheet();
      buildChipBar();
      refresh();
      zoomToPhase(phase.id);
    });
    bar.appendChild(chip);
  }
}

// ══════════════════════════════════════════════════════════
// ZOOM HELPERS
// ══════════════════════════════════════════════════════════
function zoomToOverview() {
  view?.goTo({ center: [35.0, 31.8], zoom: 7 }, { duration: 800 });
}

function zoomToPhase(phaseId) {
  const phaseCities = cities.filter((c) => c.phases.includes(phaseId));
  if (phaseCities.length === 0) return;

  const lngs = phaseCities.map((c) => c.lng);
  const lats = phaseCities.map((c) => c.lat);
  const padding = 0.5;

  view?.goTo(
    {
      target: {
        type: "extent",
        xmin: Math.min(...lngs) - padding,
        ymin: Math.min(...lats) - padding,
        xmax: Math.max(...lngs) + padding,
        ymax: Math.max(...lats) + padding,
        spatialReference: { wkid: 4326 }
      }
    },
    { duration: 800 }
  );
}

function zoomToCity(city) {
  const targetZoom = Math.max(view?.zoom || 7, 9);
  view?.goTo(
    { center: [city.lng, city.lat], zoom: targetZoom },
    { duration: 600 }
  );
}

// ══════════════════════════════════════════════════════════
// BOTTOM SHEET (City Detail)
// ══════════════════════════════════════════════════════════
function selectCity(city) {
  selectedCity = city;
  refresh();
  zoomToCity(city);
  openBottomSheet(city);
}

function openBottomSheet(city) {
  const sheet = document.getElementById("bottom-sheet");
  const overlay = document.getElementById("sheet-overlay");

  // City name
  const nameEl = document.getElementById("sheet-city-name");
  nameEl.textContent =
    cityText(city.id, "biblicalName") || city.biblicalName;

  // Modern name & region
  document.getElementById("sheet-modern-name").textContent =
    cityText(city.id, "modernName") || city.modernName;
  document.getElementById("sheet-region").textContent =
    cityText(city.id, "region") || city.region;

  // Events
  const eventsEl = document.getElementById("sheet-events");
  eventsEl.innerHTML = "";

  // Filter events by active phase (or show all)
  let relevantEvents = city.events;
  if (activePhase !== "all") {
    relevantEvents = city.events.filter((e) => e.phase === activePhase);
  }
  if (relevantEvents.length === 0) relevantEvents = city.events;

  for (let i = 0; i < relevantEvents.length; i++) {
    const event = relevantEvents[i];
    const phase = phases.find((p) => p.id === event.phase);

    const card = document.createElement("div");
    card.className = "event-card";

    // Phase tag
    const tag = document.createElement("div");
    tag.className = "event-phase-tag";
    tag.style.background = `${phase.hexColor}22`;
    tag.style.color = phase.hexColor;
    const phaseName = phaseText(phase.id, "name") || phase.name;
    tag.textContent = `${phaseName} — ${phase.dateRange}`;
    card.appendChild(tag);

    // Event index for translation lookup
    const eventIdx = city.events.indexOf(event) + 1;

    // Action title
    const action = document.createElement("div");
    action.className = "event-action";
    action.textContent =
      eventText(city.id, eventIdx, "action") || event.action;
    card.appendChild(action);

    // Description
    const desc = document.createElement("div");
    desc.className = "event-description";
    desc.textContent =
      eventText(city.id, eventIdx, "description") || event.description;
    card.appendChild(desc);

    // Bible quote
    const quoteText =
      eventText(city.id, eventIdx, "quote") || event.quote;
    if (quoteText) {
      const quote = document.createElement("div");
      quote.className = "event-quote";
      quote.textContent = quoteText;
      card.appendChild(quote);
    }

    // Verse badge
    const badge = document.createElement("span");
    badge.className = "event-verse-badge";
    badge.textContent = displayVerse(event.verse);
    card.appendChild(badge);

    eventsEl.appendChild(card);
  }

  sheet.classList.add("open");
  overlay.classList.add("open");
}

function closeBottomSheet() {
  selectedCity = null;
  document.getElementById("bottom-sheet").classList.remove("open");
  document.getElementById("sheet-overlay").classList.remove("open");
  refresh();
}

// ── Touch drag to dismiss (mobile) ──────────────────────
(function initSheetDrag() {
  const handle = document.getElementById("sheet-handle");
  const sheet = document.getElementById("bottom-sheet");
  let startY = 0;
  let currentY = 0;

  handle.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    sheet.style.transition = "none";
  });

  handle.addEventListener("touchmove", (e) => {
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      sheet.style.transform = `translateY(${diff}px)`;
    }
  });

  handle.addEventListener("touchend", () => {
    sheet.style.transition = "";
    sheet.style.transform = "";
    if (currentY - startY > 100) {
      closeBottomSheet();
    }
    startY = 0;
    currentY = 0;
  });
})();

// ══════════════════════════════════════════════════════════
// SCRIPTURE PANEL
// ══════════════════════════════════════════════════════════
function buildChapterList(filter = "") {
  const list = document.getElementById("scripture-list");
  list.innerHTML = "";
  const lowerFilter = filter.toLowerCase();

  for (const chapter of allChapters) {
    const displayCh = displayChapter(chapter);
    const entries = scriptureIndex[chapter] || [];

    // Filter
    if (lowerFilter) {
      const matchesChapter = displayCh.toLowerCase().includes(lowerFilter);
      const matchesVerse = entries.some((e) =>
        displayVerse(e.event.verse).toLowerCase().includes(lowerFilter)
      );
      if (!matchesChapter && !matchesVerse) continue;
    }

    // Chapter header
    const chDiv = document.createElement("div");
    chDiv.className =
      "scripture-chapter" +
      (selectedChapter === chapter ? " active" : "");
    const chTitle = document.createElement("div");
    chTitle.className = "chapter-title";
    chTitle.textContent = displayCh;
    chDiv.appendChild(chTitle);

    chDiv.addEventListener("click", () => {
      if (selectedChapter === chapter) {
        selectedChapter = null;
      } else {
        selectedChapter = chapter;
      }
      buildChapterList(filter);
      refresh();
    });
    list.appendChild(chDiv);

    // Verse entries (if this chapter is selected or filter matches)
    if (selectedChapter === chapter || lowerFilter) {
      for (const entry of entries) {
        const city = cities.find((c) => c.id === entry.cityId);
        if (!city) continue;

        const phase = phases.find((p) => p.id === entry.event.phase);

        const vDiv = document.createElement("div");
        vDiv.className = "scripture-verse-entry";

        const dot = document.createElement("span");
        dot.className = "verse-dot";
        dot.style.background = phase ? phase.hexColor : "#C9A84C";
        vDiv.appendChild(dot);

        const ref = document.createElement("span");
        ref.className = "verse-ref";
        ref.textContent = displayVerse(entry.event.verse);
        vDiv.appendChild(ref);

        const cityName = document.createElement("span");
        cityName.className = "verse-city";
        cityName.textContent =
          cityText(city.id, "biblicalName") || city.biblicalName;
        vDiv.appendChild(cityName);

        vDiv.addEventListener("click", (e) => {
          e.stopPropagation();
          selectCity(city);
        });
        list.appendChild(vDiv);
      }
    }
  }
}

function openScripturePanel() {
  const panel = document.getElementById("scripture-panel");
  panel.classList.add("open");
  document.getElementById("btn-scripture").classList.add("active");
  buildChapterList();
}

function closeScripturePanel() {
  document.getElementById("scripture-panel").classList.remove("open");
  document.getElementById("btn-scripture").classList.remove("active");
}

// ══════════════════════════════════════════════════════════
// UI BINDINGS
// ══════════════════════════════════════════════════════════
function bindUIEvents() {
  // Names toggle
  document.getElementById("btn-names").addEventListener("click", () => {
    showBiblicalNames = !showBiblicalNames;
    refresh();
    showToast(showBiblicalNames ? t("biblicalNames") : t("modernNames"));
  });

  // Scripture panel toggle
  document.getElementById("btn-scripture").addEventListener("click", () => {
    const panel = document.getElementById("scripture-panel");
    if (panel.classList.contains("open")) {
      closeScripturePanel();
    } else {
      openScripturePanel();
    }
  });

  document.getElementById("scripture-close").addEventListener("click", () => {
    closeScripturePanel();
  });

  // Scripture search
  document
    .getElementById("scripture-search-input")
    .addEventListener("input", (e) => {
      buildChapterList(e.target.value);
    });

  // About modal
  document.getElementById("btn-info").addEventListener("click", () => {
    document.getElementById("modal-about").classList.add("open");
  });
  document.getElementById("about-close").addEventListener("click", () => {
    document.getElementById("modal-about").classList.remove("open");
  });
  document.getElementById("modal-about").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.classList.remove("open");
    }
  });

  // Language switch
  document.getElementById("btn-lang-switch").addEventListener("click", () => {
    const newLang = getLang() === "en" ? "es" : "en";
    setLang(newLang);
    updateUIStrings();
    buildChipBar();
    buildAboutLegend();
    refresh();
    if (document.getElementById("scripture-panel").classList.contains("open")) {
      buildChapterList(
        document.getElementById("scripture-search-input").value
      );
    }
    if (selectedCity) openBottomSheet(selectedCity);
    showToast(newLang === "en" ? "English" : "Español");
  });

  // Bottom sheet overlay close
  document.getElementById("sheet-overlay").addEventListener("click", () => {
    closeBottomSheet();
  });
}

// ══════════════════════════════════════════════════════════
// UI UPDATES
// ══════════════════════════════════════════════════════════
function updateUIStrings() {
  document.getElementById("app-title").textContent = t("appTitle");
  document.getElementById("btn-names-label").textContent = t("names");
  document.getElementById("btn-scripture-label").textContent = t("scripture");
  document.getElementById("btn-info-label").textContent = t("about");
  document.getElementById("scripture-panel-title").textContent = t("scriptureIndex");
  document.getElementById("scripture-search-input").placeholder = t("searchPlaceholder");
  document.getElementById("about-title").textContent = t("aboutTitle");
  document.getElementById("about-description").textContent = t("aboutDescription");
  document.getElementById("about-features").innerHTML =
    `<strong>${t("features")}</strong> ${t("aboutFeatures")}`;
  document.getElementById("about-close").textContent = t("close");
}

function updateSplash() {
  document.getElementById("splash-title").textContent = t("appTitle");
  const verseEl = document.getElementById("splash-verse");
  verseEl.innerHTML = `${t("splashVerse")}<br/><span style="color: var(--text-muted); font-size: 0.82rem;">${t("splashVerseRef")}</span>`;
}

function buildAboutLegend() {
  const container = document.getElementById("about-legend");
  container.innerHTML = "";

  for (const phase of phases) {
    const item = document.createElement("div");
    item.className = "legend-item";

    const dot = document.createElement("span");
    dot.className = "legend-color";
    dot.style.background = phase.hexColor;
    item.appendChild(dot);

    const text = document.createElement("span");
    text.className = "legend-text";
    const name = phaseText(phase.id, "name") || phase.name;
    text.innerHTML = `${name} <span class="legend-dates">${phase.dateRange}</span>`;
    item.appendChild(text);

    container.appendChild(item);
  }
}

// ── Toast ────────────────────────────────────────────────
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2000);
}
