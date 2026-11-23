// Minimal service worker: lets Android offer "Install app". It caches nothing — the app always loads fresh.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* network only */ });
