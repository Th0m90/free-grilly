const cacheName = 'grilly-pwa-v1';
const filesToCache = [
  'index.html',
  'about.html',
  'probes.html',
  'settings.html',
  'bootstrap.min.js',
  'custom-boostrap.min.css',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// Install event
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== cacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          // Optional: fallback voor offline
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        })
      );
    })
  );
});
