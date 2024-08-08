import React, { useState } from 'react'
import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import image from '../Assets/Images/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import loginActonCreater from '../Redux/ActionCreater/loginActionCreater';
import Web from './WebBar/Web';
import Mobile from './MobileBar/Mobile';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const cartData = useSelector((productStore) => {
    return productStore
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (e) => {
    dispatch(loginActonCreater(false))
    navigate('/login')
    // console.log(e.target.value);
  }
  return (
    <div className='NavBar'>
      <div className="heading">

        <img src={image} alt="shopping" height="40px" width='65px' />
        <h1>Shopify</h1>

      </div>
      

      <Web cartData={cartData} handleLogout={handleLogout}/>
      <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
     
            <AiOutlineMenu className='menu-icon' />
         
      </div>
      {isOpen && <Mobile  cartData={cartData} handleLogout={handleLogout}/>}
    </div>
  )
}

export default NavBar