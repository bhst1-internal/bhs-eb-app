self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // Network-first approach so Excel data is always fresh
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});