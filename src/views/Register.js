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
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({});
    const validate = () => {
        let errors = {};
        if (!email.trim()) {
            errors.email= "Email is required";
          }
        if (!username.trim()) {
          errors.username = "Username is required";
        }
      
        if (!password.trim()) {
          errors.password= "Password is required";
        }
      
        return errors;
      }
    const history = useHistory();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validate();
        setErrors(errors);
        // const response = await fetch('http://localhost:5000/signup', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ name,username, password }),
        // });
        // const data = await response.json();
        // alert(data.message);
        if (Object.keys(errors).length === 0) {
            await axios({
                method:'POST',
                url:"http://localhost:5000/signup",
                headers: {'content-type': 'application/json'},
                data:{email,username,password}
              })
                  .then(response => {
                    if (response.data.error) {
                      setError('Could not creat the account.Please try again');
                      alert(error);
                    } else {
                      
                    //   setLoggedIn(true);
                    //   setUser(response.data);
                      console.log(response)
                      history.push('/login');
                     
                      // set the cookie
                      alert(response.data.message);
                      
                    }
                    
                   
                    
                  })
                  .catch(error=> {
                    console.log(error);
                  })
        }
        
    };

    return (
        <>
           <img class="wave" src={about}/>
            <div class="maincontainer">
                    <div class="image">
                        <img className="image" src={login}/>
                    </div>
                    <div class="login-content">
                        <Form className='formContainer' onSubmit={handleSubmit}>
                            {/* <img src={avatar} classname="avatar"/> */}
                            
                            <h2 class="title">Create Account</h2>
                            <div class="input-div one">
                            <div class="i">
                                    <i class="fas fa-envelope"></i>
                            </div>
                            <div class="div">
                                    
                                    <input type="text" class="input" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            </div>
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                            <div class="input-div one">
                            <div class="i">
                                    <i class="fas fa-user"></i>
                            </div>
                            <div class="div">
                                    
                                    <input type="text" class="input" placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            </div>
                            {errors.username && <div className="text-danger">{errors.username}</div>}
                            <div class="input-div pass">
                            <div class="i"> 
                                    <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                   
                                    <input type="password" class="input" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            </div>
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                            <input type="submit" class="loginbtn" value="SignUp"/>
                        </Form>
                    </div>
            </div>

        </>
    )
}

export default Login