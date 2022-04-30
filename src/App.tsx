import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';


import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';
import { Product } from './pages/product'


function App() {
  return (
       <BrowserRouter>
           <Route component ={ Home } path="/" exact />
           <Route component ={ ProductInfo }  path="/sobre" />
           <Route component ={ Shop } path="/shop" />
           <Route component ={ Product } path="/product" />
       </BrowserRouter>
  );
}

export default App;
