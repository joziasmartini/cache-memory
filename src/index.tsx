import React from 'react';
import ReactDOM from 'react-dom/client';
import CacheMemory from './CacheMemory';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CacheMemory />
  </React.StrictMode>
);