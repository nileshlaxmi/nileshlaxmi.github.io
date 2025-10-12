// sw-register.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('SW registered:', reg);

        // Optional: listen for updates and notify the user
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          newSW.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              // New update available - you can show a toast to user
              console.log('New content available; please refresh.');
              // Example: dispatch custom event or show a visible banner with "Refresh"
              window.dispatchEvent(new Event('sw.update'));
            }
          });
        });
      })
      .catch(err => console.error('SW registration failed:', err));
  });

  // Optional: listen for update event to prompt user
  window.addEventListener('sw.update', () => {
    // show an update message in UI and call reload on user action
    const shouldReload = confirm('A new version is available. Reload to update?');
    if (shouldReload) {
      // Tell waiting SW to skip waiting and take control
      navigator.serviceWorker.getRegistration().then(reg => {
        if (!reg || !reg.waiting) return window.location.reload();
        reg.waiting.postMessage({type: 'SKIP_WAITING'});
        reg.waiting.addEventListener('statechange', (e) => {
          if (e.target.state === 'activated') window.location.reload();
        });
      });
    }
  });
}