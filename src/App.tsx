import React from 'react';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom'
import { Home } from './pages/home'
import { ProductInfo } from './pages/ProductInfo'
import { Shop } from './pages/shop';
import { Product } from './pages/product'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  element={<ProtectedRoute redirectTo='/'/>} >
          <Route path='/produtos' element={<ProductInfo />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/perfil' element={<Product />} />
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
