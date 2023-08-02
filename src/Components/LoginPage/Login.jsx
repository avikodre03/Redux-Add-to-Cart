import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loginActonCreater from '../Redux/ActionCreater/loginActionCreater'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

import profileActionCreater from '../Redux/ActionCreater/profileActionCreater'

const Login = () => {
    const [user, setuser] = useState(
        {
            email: "",
            password: ""
        })
    const Data = useSelector((productStore) => {
        return productStore
    })
    const dispatch = useDispatch()
    const navigate = useNavigate();

    let [credentials, setCredentials] = useState(Data.initialRegisterData)
    console.log("credentials", credentials);

    const loginCred = (e) => {
        e.preventDefault();
        const filterdata = credentials.filter((ele) => {
            return (
                ele.email === user.email && ele.password === user.password
            );
        });
        console.log(filterdata, "filterdata")
        let Username = filterdata.map((ele) => {
            return ele.Username
        })
        if (filterdata.length > 0) {
            dispatch(loginActonCreater(true))
            dispatch(profileActionCreater(Username))
            navigate("/cart");
        } else {
            alert("Credentials are incorrect!")
        }
    }

    return (
        <div className='loginPage'>
            <div className='logindiv'>
                <h2>Login</h2>
                <p>Email Address</p>
                <input type="email" name="email" id=""
                    onChange={(e) => {
                        setuser({ ...user, email: e.target.value })
                    }} />
                <p>Password</p>
                <input type="password"
                    onChange={(e) => {
                        setuser({ ...user, password: e.target.value })
                    }} />
                <button onClick={(e) => loginCred(e)}>Sign in</button>
                <div className="createDiv">
                    <p>Don't have an account?</p>
                    <Link to="/register"> Create an account</Link>
                </div>

            </div>
        </div>
    )
}

export default Login