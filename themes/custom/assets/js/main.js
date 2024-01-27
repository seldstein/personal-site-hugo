// Initialize the service worker
if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js');
}

// GPT's version
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(err => {
          console.log('Service Worker registration failed:', err);
        });
    });
  }
  