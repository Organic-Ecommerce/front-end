import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Login } from './pages/login';
import { ProductInfo } from './pages/ProductInfo';
import { Shop } from './pages/shop';

function App() {
  return (
    <BrowserRouter>
      <Route component={Login} exact path="/" />
      <Route component={Home} path="/home" />
      <Route component={ProductInfo} path="/sobre" />
      <Route component={Shop} path="/shop" />
    </BrowserRouter>
  );
}

export default App;
