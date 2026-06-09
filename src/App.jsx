import { useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme.jsx';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => {
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing;
          newSW?.addEventListener('statechange', () => {
            if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
              window.dispatchEvent(new Event('sw.update'));
            }
          });
        });
      })
      .catch((err) => console.error('SW registration failed:', err));
  });

  window.addEventListener('sw.update', () => {
    const shouldReload = confirm('A new version is available. Reload to update?');
    if (!shouldReload) return;

    navigator.serviceWorker.getRegistration().then((reg) => {
      if (!reg?.waiting) {
        window.location.reload();
        return;
      }
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
      reg.waiting.addEventListener('statechange', (e) => {
        if (e.target.state === 'activated') window.location.reload();
      });
    });
  });
}

export default function App() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <ThemeProvider>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <div className="wrap" role="main" aria-labelledby="name">
        <Header />
        <main id="content">
          <div>
            <Summary />
            <Experience />
            <Projects />
            <ContactForm />
          </div>
          <Sidebar />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
