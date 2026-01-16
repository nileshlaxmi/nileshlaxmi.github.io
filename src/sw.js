// sw.js
const CACHE_VERSION = 'v1';
const CACHE_NAME = `nilesh-portfolio-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/', // index.html
  '/index.html',
  '/styles.css',
  '/script.js',
  '/offline.html',
  '/docs/resume.pdf',
  '/images/og-image-1200x630.png',
  '/images/favicon/favicon-32x32.png',
  '/images/favicon/favicon-16x16.png',
  '/images/favicon/apple-touch-icon.png',
  // add any other static assets you want cached up-front
];

// Install: cache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE.map(url => new Request(url, {cache: 'no-cache'})));
    })
  );
});

// Activate: cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch handler:
// - Navigation requests: network-first, fallback to cache -> offline.html
// - Static assets (css/js/images): cache-first
// - Other cross-origin requests: network-first
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // DON'T cache POST requests (forms/api)
  if (req.method !== 'GET') return;

  // Navigation (HTML) requests
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Optionally update cache with latest HTML
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('/index.html', copy));
          return res;
        })
        .catch(() =>
          caches.match('/index.html').then(cached => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // For same-origin requests to JS/CSS/Images -> Cache First
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          // Put a copy in cache for future use (optional - avoid caching large media)
          return caches.open(CACHE_NAME).then((cache) => {
            try { cache.put(req, res.clone()); } catch (e) {}
            return res;
          });
        }).catch(() => {
          // If image requested and offline, could return a placeholder image if you add one
          return caches.match('/images/og-image-1200x630.png');
        });
      })
    );
    return;
  }

  // Fallback: network-first for cross-origin (APIs)
  event.respondWith(
    fetch(req).catch(() => caches.match(req))
  );
});

// Optional: listen to skipWaiting message to activate new SW immediately
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});