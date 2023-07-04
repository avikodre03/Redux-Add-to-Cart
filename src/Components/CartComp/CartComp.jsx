import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import productStore from '../Redux/Store'
import './CartComp.css'
import emptyimg from "../Assets/Images/images.png"
import removeCartActionCreater from '../Redux/ActionCreater/removeCartActionCreater'
import quantityActionCreater from '../Redux/ActionCreater/quantityActionCreater'
const CartComp = () => {

  const cartData = useSelector((productStore) => {
    return productStore.cart
  })
  const navigate = useNavigate()
  const dispatch = useDispatch(productStore);

  const handleRemovecart = (id) => {
    dispatch(removeCartActionCreater(id))
  }

  const handleQuentity = (id, updateQuentity) => {
    if (updateQuentity >= 1) {

      dispatch(quantityActionCreater(id, updateQuentity))
    }
  }

  return (
    <>

      <h1 style={{ margin: "10px" }}>Cart Component</h1>
      <div className='CartComp'>
        {cartData.length == 0 ? (
          <div className="emptyCart">
            <img src={emptyimg} alt="empty cart" />
            <p>Must add iteams on the cart before proceed to checkout.</p>
            <button onClick={() => {
              navigate("/product")
            }}>Return To Shopping</button>
          </div>
        ) : (cartData.map((ele) => {
          return <>
            <div className="cartCard">
              <div className="cartCardImgContainer">
                <img src={ele && ele.image} alt="" />
              </div>
              <div className="cartCardDescription">

                <h2>{ele && ele.title}</h2>
                <span>Product Description :</span>
                <p>{ele && ele.description}</p>
                <div className="quantity"><p>QTY : </p>
                  <button
                    onClick={() => { handleQuentity(ele.id, ele.quantity - 1) }}
                  >-</button>
                  {ele && ele.quantity}
                  <button
                    onClick={() => { handleQuentity(ele.id, ele.quantity + 1) }}
                  >+</button></div>
              </div>
              <div className="cartCardPrice"> <p>${ele && ele.price}</p>
                <button onClick={() => { handleRemovecart(ele.id) }}>Remove</button>
              </div>
            </div>
          </>
        }))}

      </div>
    </>
  )
}

export default CartComp