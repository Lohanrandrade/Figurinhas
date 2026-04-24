import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// META PIXEL
!(function(f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
  if (f.fbq) return;
  n = f.fbq = function() {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  t = b.createElement(e) as HTMLScriptElement;
  t.async = true;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode!.insertBefore(t, s);
})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

(window as any).fbq('init', '768943895896997');
(window as any).fbq('track', 'PageView');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
