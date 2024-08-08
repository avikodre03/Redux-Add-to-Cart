import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import './Mobile.css'
const Mobile = ({cartData,handleLogout}) => {
  return (
    <div className='Mobile-comp'>
        <div className="Mobile-link">
        <NavLink to='/' activeClassName="active">Home</NavLink>
        <NavLink to='/product' activeClassName="active">Product</NavLink>
        <NavLink to='/contact' activeClassName="active">Contact</NavLink>
        
      </div>
      <div className="Mobile-cartAndlogin">
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

export default Mobile