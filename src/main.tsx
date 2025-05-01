import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import router from './App';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
