import React from 'react';

<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { Home } from './pages/home';

function App() {
  return (
   <Home />
=======
import Shop from './pages/shopcart/Shop'

function App() {
  return (
    <div className="App">
      
      <Shop />

    </div>
>>>>>>> Create product and cart
>>>>>>> Create product and cart
  );
}

export default App;
