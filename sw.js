const CACHE_NAME = 'pedicalc-v4'; // Updated version to v4 to trigger a new install
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './calc.html',
  './mlad.html',
  './html2pdf.bundle.min.js' // Added: Local PDF library
];

// Install Event (Cache files immediately)
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force new worker to activate
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Important: If ANY file in this list is missing, the install fails.
      // Ensure html2pdf.bundle.min.js is actually in the folder.
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
