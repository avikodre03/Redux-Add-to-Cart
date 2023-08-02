import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import './Invoice.css'
import DateTimeDisplay from './DateTimeDisplay/DateTimeDisplay';

const Invoice = () => {

  let [totalprice, setTotalprice] = useState(0)
console.log(totalprice);

  const TotalpriceHandle = () => {
    if (cartData.cart.length > 0) {

      console.log(cartData.cart.length)
      const total = cartData.cart.map((ele) => {
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
  


  const componentRef = useRef();
  const navigate = useNavigate()
  const cartData = useSelector((productStore) => {
    return productStore
  })
  console.log(cartData.initialFormData.firstname);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    TotalpriceHandle()
  }, [cartData])
  return (
    <>
      <div className="invoiceContainer" ref={componentRef}>
        <div className="invoiceContainerTop">
          <h1>Invoice</h1>
          <div className="dateAndTime">

          <p><DateTimeDisplay /></p>
          </div>
          <div className="shippingAddress">

          <h3>Shipping Address</h3>
          <p>{cartData.initialFormData.firstname} {cartData.initialFormData.lastname}</p>
          <p>{cartData.initialFormData.address}</p>
          <p>{cartData.initialFormData.Zip}, {cartData.initialFormData.Country}- {cartData.initialFormData.State
}</p>
          </div>
        </div>
       
        <div className="invoiceContainerBottom">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Oty</th>
                <th>Gross Amount</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.cart.map((ele)=>{
                  return <>
                  <tr >
                <td>{ele && ele.title}</td>
                <td>{ele && ele.quantity}</td>
                <td>{ele && ele.price}</td>
                <td>{ele && ele.quantity * ele.price}</td>
                
                
              </tr>
                  </>
                })

              }
              
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">TOTAL OTY:{ cartData.cart.length}</td>
                <td colSpan="2">TOTAL PRICE: { cartData.cart.length == 0 ? (<h3>${totalprice}</h3>) : (<h3>${+totalprice + 10}</h3>)}</td>
              </tr>
            </tfoot>
            <tfoot>
              <tr>
                <td colSpan="1"></td>
                <td colSpan="2">Shipping and Handling Charges</td>
                <td colSpan="2">10</td>
              </tr>
            </tfoot>
          </table>
        </div>
      <button onClick={handlePrint}>Invoice download</button>
      <button onClick={() => {
        navigate("/cart")
      }}>Back to cart</button>
      </div>
    </>
  )
}

export default Invoice