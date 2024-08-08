import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import registerActionCreater from '../Redux/ActionCreater/registerActionCreater'
import { useNavigate } from 'react-router-dom'

import "./Register.css"
const Register = () => {
    const initialLoginData = {
        Username: '',
        fullname: '',
        email: '',
        password: '',
       
    }
    const [loginData, setloginData] = useState(initialLoginData)
    const Data = useSelector((productStore) => {
        return productStore
      })
      
     let [credentials , setCredentials ] = useState(Data.initialRegisterData)
     console.log("credentials",credentials);

    const dispatch=useDispatch()
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setloginData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        
      };
      const handleRegister=()=>{
          if(loginData.Username==="" ||
          loginData.fullname==="" ||
          loginData.email==="" ||
          loginData.password==="" ){
           
            alert("Please Enter All details")
        }else{
            const isDataExisting = credentials.some((ele) => {
                return ele.email === loginData.email;
              });
              if(isDataExisting){
                alert("Data already exists please Sign in");
                setloginData(initialLoginData)
              }else{
                setloginData(initialLoginData)
                dispatch(registerActionCreater(loginData))
                // localStorage.setItem("register-data", JSON.stringify(loginData))
                navigate("/login")
                  
              }
        }
      }
  return (
    <div className="registerPage">

    <div className='registerDiv'>
      <h2>Sign Up</h2>
      <p>UserName</p>
        <input type="text" name='Username' value={loginData.Username} onChange={handleChange}  placeholder='Enter UserName'/>
       <p>Full Name</p>
        <input type="text" name='fullname' value={loginData.fullname} onChange={handleChange} placeholder='Enter Full name'/>
        <p>Email</p>
        <input type="email"name='email' value={loginData.email} onChange={handleChange}   placeholder='Enter Email'/>
      <p>Password address</p>
        <input type="passWord" name='password' value={loginData.password} onChange={handleChange}  placeholder='Enter Password'/>
        <button onClick={handleRegister}>Register</button>
    </div>
    </div>
  )
}

export default Register