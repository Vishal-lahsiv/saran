// src/App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../src/COMPONENTS/About.jsx';
import Contact from '../src/COMPONENTS/Contact.jsx';
import Home from '../src/COMPONENTS/Home.jsx';
import Login from '../src/COMPONENTS/Login.jsx';
import Navbar from '../src/COMPONENTS/Navbar.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import Register from './COMPONENTS/Register.jsx';
import Product from  './COMPONENTS/Product.jsx';
import Admin from './COMPONENTS/Admin.jsx'
import InventoryDetails from './COMPONENTS/InventoryDetails.jsx';
import Order from './COMPONENTS/Order.jsx';
import Blog from './COMPONENTS/Blog.jsx';
import Press from './COMPONENTS/Press.jsx';
import FAQ from './COMPONENTS/FAQ.jsx';

const App = () => {
  const cur=useLocation();
  const arr=['/register','/login'];
  const nav=arr.includes(cur.pathname);
  return (
    <>
    <div>
      {!nav && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Register/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Usermanagement" element={<Admin/>} />
        <Route path="/Inventory" element={<InventoryDetails/>} />
        <Route path="/Orders" element={<Order/>} />
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Press & Media" element={<Press/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
      </Routes>
      {!nav && <Footer/>}
      
    </div>
    </>
  );
};

export default App;
