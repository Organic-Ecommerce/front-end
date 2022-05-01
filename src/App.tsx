import React from 'react';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';
import { Product } from './pages/product'
import { Login } from './pages/login/';

function App() {
  return (
      <Routes>
        <Route  element={<ProtectedRoute redirectTo='/'/>} >
          <Route path='/produtos/:id' element={<ProductInfo />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/teste' element={<Product />} />
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
  );
}

interface ProtectedRouteProps {
  redirectTo: string
}

function ProtectedRoute({redirectTo}: ProtectedRouteProps) {
  const authorization = true
  return authorization ? <Outlet /> : <Navigate to={redirectTo} />
}

export default App
