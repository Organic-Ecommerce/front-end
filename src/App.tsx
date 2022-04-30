import React from 'react';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import { getItem } from './assets/localStorage';

import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  element={<ProtectedRoute redirectTo='/'/>} >
          <Route path='/produtos' element={<ProductInfo />} />
          <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>
  );
}

interface ProtectedRouteProps {
  redirectTo: string
}

function ProtectedRoute({redirectTo} : ProtectedRouteProps ) {
  const authorization = getItem('token')
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />
}


export default App;
