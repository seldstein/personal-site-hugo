// || Service worker

// https://gomakethings.com/writing-your-first-service-worker-with-vanilla-js/
// https://github.com/mdn/serviceworker-cookbook/blob/master/offline-fallback/index.js

// If the browser supports service workers, register the service worker
if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js');
}