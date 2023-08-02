import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import productStore from '../Redux/Store'
import './CartComp.css'
import emptyimg from "../Assets/Images/images.png"
import removeCartActionCreater from '../Redux/ActionCreater/removeCartActionCreater'
import quantityActionCreater from '../Redux/ActionCreater/quantityActionCreater'
import { HiArrowNarrowLeft } from 'react-icons/hi';

const CartComp = () => {

  let [totalprice, setTotalprice] = useState(0)

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

  const TotalpriceHandle = () => {
    if (cartData.length > 0) {

      console.log(cartData.length)
      const total = cartData.map((ele) => {
        return ele.price * ele.quantity
      })
      console.log(total)
      const totalPrice = total.reduce((acc, current) => {
        return acc + current
      })
      console.log(totalPrice)
      setTotalprice(totalPrice.toFixed(2))
     
    } else {
      setTotalprice(0)
    }
  }
  useEffect(() => {
    TotalpriceHandle()
  }, [cartData])

  return (
    <>
      <div className="CartCompContainer">
        <div className="CartCompContainerTop" >

          <div className="cartCompContainerLeft">
            <div className="cartCompContainerLeftTop">
              <h2>Shopping Cart</h2>
              <h2>{cartData.length} items</h2>

            </div>
            <hr />
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
                      <span>{ele && ele.category}</span>
                      <div className="totalPrice">

                        <p>{ele && ele.quantity} X ${ele && ele.price} = ${ele && ele.quantity * ele.price}</p>
                      </div>
                      <div className="quantity"><p>QTY : </p>
                        <button
                          onClick={() => { handleQuentity(ele.id, ele.quantity - 1) }}
                        >-</button>
                        <p>{ele && ele.quantity}</p>
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
          </div>
          <div className="cartCompContainerRight" >
            <div className="cartCompContainerRightTop">
              <h2>Order Summery</h2>
            </div>
            <hr />
            <div className="cartCompContainerRightBottom">
              <div className="iteams">
                <h3>items {cartData.length}</h3>
                <h3>${totalprice}</h3>
              </div>
              <div className="shipping">
                <h4>Shipping</h4>
                <p>Standard Shipping - $10.00</p>
              </div>
              <div className="promoCode">
                <h4>PROMO CODE</h4>
                <input type="text" placeholder='Enter your Code' />
                <button>APPLY</button>
              </div>
              <hr />
              <div className="totalCost">
                <h4>TOTAL COST</h4>
                {cartData.length == 0 ? <h3>${totalprice}</h3> : <h3>${+totalprice + 10}</h3>}
              </div>
              <div className="CheckOut">
                {cartData.length == 0 ?
                (<button onClick={()=>{alert("cart is empty")}}
                >CHECKOUT</button>)
              :(<Link to="/checkout">
              <button>CHECKOUT</button>
              </Link>)}
                
              </div>
            </div>
          </div>
        </div>
        <div className="ContinueShopping">
          <button onClick={() => {
            navigate("/product")
          }}><HiArrowNarrowLeft />Continue Shopping</button>
        </div>
      </div>
    </>


  )
}

export default CartComp