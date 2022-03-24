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
import ProductDetail from './pages/ProductDetail';
import { add, remove } from './api/products';
import ProductMangager from './pages/admin/products/ProductMangager';
import ProductAdd from './pages/admin/products/ProductAdd';


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      // const response = await fetch("http://localhost:4000/api/products");
      // const data = await response.json();
      // setProducts(data);
    };
    getProducts();
  }, []);
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  const onRemoveHandle = async (id: number | String) => {
    remove(id);
    setProducts(products.filter(item => item._id != id));
  };
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
          <Route path='admin' element={<AdminLayouts />} >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductMangager products={products} onRemove={onRemoveHandle} />} />
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
