import React from 'react'
import './NavBar.css'
import { Link,NavLink } from 'react-router-dom'
import image from '../Assets/Images/logo.png'
const NavBar = () => {
  return (
    <div className='NavBar'>
      <div className="heading">

      <img src={image} alt="shopping" height="40px" width='65px' />
      <h1>GeeksMart</h1>
      
      </div>
      <div className="link">
        <NavLink to='/'   activeClassName="active">Home</NavLink>
        <Link to='/product'>Product</Link> 
        <Link to='/cart'>Cart</Link>

      </div>
    </div>
  )
}

export default NavBar