import React from 'react'
// import about from "../images/about.svg";
import Common from './Common';
import about from "assets/img/wave.png";
import login from "assets/img/bg.svg";
import img from "assets/img/about.svg";
import avatar from "assets/img/avatar.svg";
import { NavLink } from "react-router-dom";
import "assets/css/style.css";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Dropdown,
    textarea,
   
    Input,
    Row,
    Col
  } from "reactstrap";
import { useState, useRef } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
const Login = () => {
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  const history = useHistory();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const validate = () => {
    let errors = {};
    
    if (!username.trim()) {
      errors.username = "Username is required";
    }
  
    if (!password.trim()) {
      errors.password= "Password is required";
    }
  
    return errors;
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      axios({
        method:'post',
        url:"http://localhost:5000/login",
        headers: {'content-type': 'application/json'},
        data:{ username, password }
      })
          .then(response => {
            if (response.data.error) {
              setError('Invalid username or password');
            } else {
              
              setLoggedIn(true);
              setUser(response.data);
              console.log(response.data)
               // set the cookie
               sessionStorage.setItem('user', JSON.stringify(response.data));
              history.push('/admin/dashboard');
              
             
            }
            
           
            
          })
          .catch(error=> {
            console.log(error);
          })
    }
   
    // try {
    //   const response = await axios.post('http://localhost:5000/login', { username, password });
    //   // Handle successful login
    //   setLoggedIn(true);
    //   setUser(response.data);
    //   console.log("faDiagramSuccessor")
    // } catch (error) {
    //   // Handle login error
    //   console.log(error)
    // }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/logout');
      // Handle successful logout
      setLoggedIn(false);
      setUser({});
    } catch (error) {
      // Handle logout error
      console.log(error)
    }
  };
    return (
        <>
           <img className="wave" src={about}/>
            <div className="maincontainer">
                    <div className="image">
                        <img className="image" src={login}/>
                    </div>
                    <div className="login-content">
                        <Form className='formContainer' onSubmit={handleLogin}>
                            <img src={avatar} classname="avatar"/>
                            
                            <h2 className="title">Welcome</h2>
                            <div className="input-div one">
                            <div className="i">
                                    <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                    {/* <h5>Username</h5> */}
                                    <input type="text" className="input" placeholder='Username' value={username} onChange={handleUsernameChange}/>
                            </div>
                           
                            </div>
                            {errors.username && <div className="text-danger">{errors.username}</div>}
                            <div className="input-div pass">
                            <div className="i"> 
                                    <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                    {/* <h5>Password</h5> */}
                                    <input type="password" className="input" placeholder='Password' value={password} onChange={handlePasswordChange}/>
                            </div>
                            
                            </div>
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                            <a href="/register">Create a new Account</a>
                            <input type="submit" className="loginbtn" value="Login"/>
                            {error && <div className='text-danger'>{error}</div>}
                        </Form>
                    </div>
            </div>

        </>
    )
}

export default Login