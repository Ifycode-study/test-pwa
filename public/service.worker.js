
//----------------------------------------------------------------------------
// NOTE 1:
// Service worker has first been initialized in the global.js script file
//----------------------------------------------------------------------------
// NOTE 2:
// service worker addEventListener does not have access to DOM elements/events
// It only has access to the events below: install, activate etc.
//----------------------------------------------------------------------------

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Service Worker...', event);
});

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating Service Worker...', event);
    return self.clients.claim();
});

//---------------------------
// non-lifecyle events below:
//---------------------------

self.addEventListener('fetch', (event) => {
    console.log('[Service Worker] Fetching something...', event);
    event.respondWith(fetch(event.request));
});
