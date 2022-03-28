import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css';
import ShowInfo from './components/showInfo'
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import type { IProduct } from "./types/product";
import "bootstrap/dist/css/bootstrap.min.css";
import WebsiteLayouts from './pages/layouts/WebsiteLayouts';
import Home from './pages/Home';
import AdminLayouts from './pages/layouts/AdminLayouts';
import Dashboard from './pages/Dashboard';
import ProductDetail from './pages/ProductDetail';
import { add, list, remove, update } from './api/products';
import ProductMangager from './pages/admin/products/ProductMangager';
import ProductAdd from './pages/admin/products/ProductAdd';
import ProductEdit from './pages/admin/products/ProductEdit';
import Register from './pages/Register';
import Login from './pages/Login';
import { getCategories } from './api/categories';
import { CategoryType } from './types/category';


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts();
    const getCategoryData = async () => {
      const { data } = await getCategories();
      setCategories(data);
    };
    getCategoryData();
  }, []);
  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  const onRemoveHandle = async (id: number | String | undefined) => {
    remove(id);
    setProducts(products.filter(item => item._id != id));
  };
  const onUpdateHandle = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(products.map(item => item._id == data._id ? data : item));
  };
  return (
    <div className='app'>
      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayouts />}>
            <Route index element={<Home products={products} />} />
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
              <Route path='add' element={<ProductAdd onAdd={onHandleAdd} categories={categories} />} />
              <Route path=':id/edit' element={<ProductEdit onUpdate={onUpdateHandle} categories={categories} />} />
            </Route>
          </Route>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
