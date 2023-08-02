import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './Checkout.css'

import productStore from '../Redux/Store'
import checkoutActionCreater from '../Redux/ActionCreater/chckoutActionCreater'

const Checkout = () => {
  const initialFormData = {
    firstname: '',
    lastname: '',
    address: '',
    Country: '',
    State: '',
    Zip: ''
  }
  const dispatch = useDispatch(productStore)

  const [formDetails, setformDetails] = useState(initialFormData)
  // console.log(formDetails);
  const handleSubmit = (event) => {
    // event.preventDefault();
    dispatch(checkoutActionCreater(formDetails))
    console.log('Form Data:', formDetails);
    setformDetails(initialFormData)
    alert("Order done Succefully..")
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setformDetails((prevData) => ({
      ...prevData,
      [name]: value
    }));

  };

  return (
    <div className="CheckoutPage">

      <div className='Billing'>
        <h2>Billing address</h2>
        <div className="fullname">
          <div className="firstname">
            <p>First name</p>
            <input type="text" name='firstname' value={formDetails.firstname} onChange={handleChange} placeholder='First Name' />
          </div>
          <div className="lastname">
            <p>Last name</p>
            <input type="text" name='lastname' value={formDetails.lastname} onChange={handleChange} placeholder='Last Name' /><br />
          </div>
        </div>
        <p>Email <span>(optional)</span></p>
        <input type="email" placeholder='you@example.com' />
        <p>address</p>
        <input type="text" name='address' value={formDetails.address} onChange={handleChange} placeholder='1234 Main St' /><br />

        <div className="cityAddress">
          <div className="country">
            <p>Country</p>
            <select name="Country" value={formDetails.Country} onChange={handleChange}>
              <option value="" selected >Choose...</option>
              <option value="India">India</option>

            </select>
          </div>
          <div className="state">
            <p>State</p>
            <input type="text" name='State' value={formDetails.State} onChange={handleChange} placeholder='State' />
          </div>
          <div className="zip">
            <p>Zip</p>
            <input type="text" name='Zip' value={formDetails.Zip} onChange={handleChange} placeholder='Zip Code' /><br />

          </div>
        </div>
        <hr />
        <div className="payment">
          <h3>Payment</h3>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label >Credit card</label><br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">Debit card</label><br />
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">PayPal</label><br />
          <div className="fullname">
            <div className="firstname">
              <p>Name on Card</p>
              <input type="text" name='Cardname' />
              <small>Full name as displayed on card</small>
            </div>
            <div className="lastname">
              <p>Card Number</p>
              <input type="text" name='cardNumber' />
            </div>
          </div>
          <div className="expiry">
            <div className="Expiration">

              <p>Expiration</p>
              <input type="text" name="" id="" />
            </div>
            <div className="cvv">

              <p>CVV</p>
              <input type="text" name="" id="" />
            </div>
          </div>

        </div>
        <hr />
        <div className="buttons">

          <button onClick={handleSubmit}>Order Now</button>
          <Link to="/invoice">
            <button>Doanload invoice</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout