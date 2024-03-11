import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductContextProvider } from './core/context/productContext';
import Application from "./router"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <Application/>        
    </ProductContextProvider>
  </BrowserRouter>
   

);
