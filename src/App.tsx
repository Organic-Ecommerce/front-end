import React from 'react';

import {BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';

function App() {
  return (
       <BrowserRouter>
           <Route component ={ Home } path="/" exact />
           <Route component ={ ProductInfo }  path="/sobre" />
           <Route component ={ Shop } path="/shop" />
       </BrowserRouter>
  );
}

export default App;
