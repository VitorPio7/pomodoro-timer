import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
//Get the root element based in the id of the html
createRoot(document.getElementById('root')!).render(
  //this works to the doom runs twice to prevent error
  <StrictMode>
    <App />
  </StrictMode>,
);
