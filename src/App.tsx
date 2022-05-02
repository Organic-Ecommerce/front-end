import React from 'react';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';
import { Product } from './pages/product'
import { Login } from './pages/login/';
import { getItem } from './helpers/localStorage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route  element={<ProtectedRoute redirectTo='/'/>}>
          <Route path='/produtos/:id' element={<ProductInfo />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/perfil' element={<Product />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
  );
}

interface ProtectedRouteProps {
  redirectTo: string
}

function ProtectedRoute({redirectTo}: ProtectedRouteProps) {
  const authorization = getItem('token')
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />
}

export default App
