import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import { useEffect, useState } from 'react';
import Button from './Components/button';

function App() {
  const products = [
    { id: 1, title: 'Produit A', desc: 'Description A', price: 100 },
    { id: 2, title: 'Produit B', desc: 'Description B', price: 200 },
    { id: 3, title: 'Produit C', desc: 'Description C', price: 300 },
  ];

  return (
    <div>
      <Navbar />
      <Button />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products products={products} />} />
        <Route path='/products/:id' element={<ProductDetails products={products} />} />
      </Routes>
    </div>
  )
}

export default App
