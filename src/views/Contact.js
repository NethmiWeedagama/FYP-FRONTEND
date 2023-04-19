import React, { useState } from "react";
// import swal from 'sweetalert';
import email from "assets/img/email.png";
import "assets/css/contact.css";
import axios from 'axios';
const Contact = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    // const inputEvent = (e) => {
    //     const { name, value } = e.target;
    //     setData((preVal) => {
    //         return {
    //             ...preVal,
    //             [name] : value,
    //         }
    //     });
    // }
 
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  
    const formSubmitHandle = (e) => {
        e.preventDefault();
        // message can be saved to db or email can be sent from here!
        axios({
          method:'post',
          url:"http://localhost:5000/mail",
          headers: {'content-type': 'application/json'},
          data:values
        })
            .then(result => {
            
             
              console.log(result.data)
              // setDisplayText(resultValue);
              // console.log(result.config.data)
            })
            .catch(error=> {
              console.log(error);
            })
        // swal("Sent!", "Message Sent Successfully!", "success");
    }

  return (
    <>
      {/* <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12">
                  <button className="btn btn-outline-primary mt-3" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div class="contactContainer">
      {/* <span class="big-circle"></span> */}
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="formTitle">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            {/* <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div> */}
            <div class="information">
              <img src={email} class="icon" alt="" />
              <p class="pt-2">lorem@ipsum.com</p>
            </div>
            {/* <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p>123-456-789</p>
            </div> */}
          </div>

          {/* <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div> */}
        </div>

        <div class="contact-form">
          {/* <span class="circle one"></span>
          <span class="circle two"></span> */}

          <form class="contactForm" onSubmit={formSubmitHandle}>
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" value={values.name}
                          onChange={handleInputChange}/>
              <label for="" class="formLabel">Name</label>
              <span>name</span>
            </div>
            <div class="input-container">
           
              <input type="email" name="email" class="input"value={values.email}
                          onChange={handleInputChange} />
              <label for="" class="formLabel">Email</label>
              <span>Email</span>
            </div>
            
            <div class="input-container textarea">
              <textarea name="message" class="input" value={values.message}
                          onChange={handleInputChange}></textarea>
              <label for="" class="formLabel">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="contactBtn" />
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;

