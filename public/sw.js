const CACHE_VERSION = 'v2';
const CACHE_NAME = `nilesh-portfolio-${CACHE_VERSION}`;

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/offline.html',
  '/docs/resume.pdf',
  '/images/og-image-1200x630.png',
  '/images/favicon/favicon-32x32.png',
  '/images/favicon/favicon-16x16.png',
  '/images/favicon/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(
        ASSETS_TO_CACHE.map((url) => new Request(url, { cache: 'no-cache' })),
      );
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET') return;

  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', copy));
          return res;
        })
        .catch(() =>
          caches.match('/index.html').then((cached) => cached || caches.match('/offline.html')),
        ),
    );
    return;
  }

  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) =>
            caches.open(CACHE_NAME).then((cache) => {
              try {
                cache.put(req, res.clone());
              } catch {
                /* ignore cache write errors */
              }
              return res;
            }),
          )
          .catch(() => caches.match('/images/og-image-1200x630.png'));
      }),
    );
    return;
  }

  event.respondWith(fetch(req).catch(() => caches.match(req)));
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
