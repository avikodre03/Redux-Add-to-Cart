import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='Contact'>
      <div className="ContactHeading">

        <h1>Contact US</h1>
        <hr />
      </div>
      <div className="bottomDiv">

        <div className="bottomLeft">
          <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" alt="" />
        </div>
        <div className="bottomRight">
          <p>Full Name</p>
          <input type="text" placeholder='Avi Kodre' />
          <p>Email Address</p>
          <input type="email" placeholder='name@example.com' />
          <p>Massage</p>
          <textarea name="" id="" cols="50" rows="10"></textarea>
          <button>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact