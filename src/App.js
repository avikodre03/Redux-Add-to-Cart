
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomeComp from './Components/HomeComp/HomeComp';
import ProductComp from './Components/ProductComp/ProductComp';
import CartComp from './Components/CartComp/CartComp';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <NavBar/>
    <Routes>
      <Route path='/' element={<HomeComp/>}/>
      <Route path='/product' element={<ProductComp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cart' element={<CartComp/>}/>
    </Routes>
    </div>
  );
}

export default App;
