// || Service worker

// https://web.dev/learn/pwa/service-workers
// https://github.com/mdn/serviceworker-cookbook/blob/master/offline-fallback/index.js

// If the browser supports service workers, register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
 } 