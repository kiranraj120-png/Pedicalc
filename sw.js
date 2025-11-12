const CACHE_NAME = 'pedicalc-v3'; // Bumped version to force update
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './calc.html',
  './mlad.html'
];

// Install Event (Cache files immediately)
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force new worker to activate
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event (Clean up old versions)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch Event (Network First Strategy)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If network works, return response AND cache it for later
        return caches.open(CACHE_NAME).then((cache) => {
          // We copy the response because a stream can only be consumed once
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => {
        // If network fails (Offline), look in cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Fallback: If looking for "folder/" (root), serve index.html
          if (event.request.url.endsWith('/')) {
             return caches.match('./index.html');
          }
        });
      })
  );
});
