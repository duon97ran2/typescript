import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/showInfo'
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import type { IProduct } from "./types/product";
import "bootstrap/dist/css/bootstrap.min.css";
import WebsiteLayouts from './pages/layouts/WebsiteLayouts';
import Home from './pages/Home';
import AdminLayouts from './pages/layouts/AdminLayouts';
import Dashboard from './pages/Dashboard';
import ProductMangager from './pages/layouts/ProductMangager';
import ProductDetail from './pages/layouts/ProductDetail';


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:4000/api/products");
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div className='app'>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayouts />}>
            <Route index element={<Home />} />
            <Route path='about' element={"About Page"} />
            <Route path='products'>
              <Route index element={"Product Detail"} />
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Route>
          <Route path='/admin' element={<AdminLayouts />} >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ProductMangager />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
