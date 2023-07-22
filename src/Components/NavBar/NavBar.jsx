import React from 'react'
import './NavBar.css'
import { Link,NavLink } from 'react-router-dom'
import image from '../Assets/Images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const NavBar = () => {
  const cartData = useSelector((productStore) => {
    return productStore.cart
  })
  
  return (
    <div className='NavBar'>
      <div className="heading">

      <img src={image} alt="shopping" height="40px" width='65px' />
      <h1>GeeksMart</h1>
      
      </div>
      <div className="link">
        <NavLink to='/'   activeClassName="active">Home</NavLink>
        <Link to='/product'>Product</Link> 
        <Link to='/contact'>Contact</Link> 
        <Link to='/cart'><FaShoppingCart/>Cart{cartData.length>0? -cartData.length:null}</Link>

      </div>
    </div>
  )
}

export default NavBar