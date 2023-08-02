
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {Navigate, Route, Routes } from 'react-router-dom';
import HomeComp from './Components/HomeComp/HomeComp';
import ProductComp from './Components/ProductComp/ProductComp';
import CartComp from './Components/CartComp/CartComp';
import Contact from './Components/Contact/Contact';
import Invoice from './Components/Invoice/Invoice';
import Checkout from './Components/Checkout/Checkout';

import Login from './Components/LoginPage/Login';
import Register from './Components/RegisterPage/Register';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {
  
  return (
    <div className="App">
     <NavBar/>
    <Routes>
      <Route path='/' element={<HomeComp/>}/>
      <Route path='/product' element={<ProductComp/>}/>
      
        <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<CartComp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
    </Routes>
    </div>
  );
}

export default App;
