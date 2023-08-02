import React from 'react'
import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import image from '../Assets/Images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import loginActonCreater from '../Redux/ActionCreater/loginActionCreater';
const NavBar = () => {
  const cartData = useSelector((productStore) => {
    return productStore
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = (e) => {
    dispatch(loginActonCreater(false))
    navigate('/login')
    console.log(e.target.value);
  }
  return (
    <div className='NavBar'>
      <div className="heading">

        <img src={image} alt="shopping" height="40px" width='65px' />
        <h1>Shopify</h1>

      </div>
      <div className="link">
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/product' activeClassName="active">Product</NavLink>
        <NavLink to='/contact' activeClassName="active">Contact</NavLink>
        
        

      </div>
      <div className="cartAndlogin">
      <NavLink to={`${cartData.isLogin ? '/cart' : "/login"}`} id='cart' activeClassName="active"><FaShoppingCart />{cartData.cart.length > 0 ? cartData.cart.length : null}</NavLink>


      {cartData.isLogin
          ?
          (<select onChange={(e) => handleLogout(e)}>
            <option value="heloo" disabled selected hidden >{cartData.profilename}</option>
            <option value="Logout" >Logout</option>

          </select>)
          :
          (<>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>)
        }


      </div>
    </div>
  )
}

export default NavBar