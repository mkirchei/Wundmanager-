/*
 * Service Worker: macht die App offline nutzbar.
 * Strategie "erst Netz, dann Speicher": Mit Internet kommt immer die neueste
 * Version (neue Themen erscheinen sofort), ohne Internet die zuletzt geladene.
 * Neue Themen-Dateien unten in DATEIEN ergänzen.
 */
const CACHE = "wundtrainer-v3";
const DATEIEN = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./themen/pruefung.js",
  "./themen/wundheilung.js",
  "./themen/haut.js",
  "./themen/gefaesse.js",
  "./themen/dekubitus.js",
  "./themen/dokumentation.js",
  "./themen/hygiene.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const eigen = url.origin === self.location.origin;
  const schrift = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!eigen && !schrift) return;

  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === "opaque")) {
          const kopie = res.clone();
          caches.open(CACHE).then((c) => c.put(req, kopie));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true }).then((treffer) =>
          treffer || (req.mode === "navigate" ? caches.match("./index.html") : Response.error())
        )
      )
  );
});
