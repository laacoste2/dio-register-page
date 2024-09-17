import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const getRootElement = (): HTMLElement => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Failed to find the root element");
  }
  return rootElement;
};

const root = ReactDOM.createRoot(getRootElement());
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
