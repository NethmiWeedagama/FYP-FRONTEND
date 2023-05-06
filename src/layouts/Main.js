import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/js/src/collapse";
// import "bootstrap/js/src/dropdown";
import { Switch, Route, Redirect } from 'react-router-dom'

import Navbar from "components/Navbars/Navbar.js";
import Home from "views/Home.js";
import About from "views/About.js";
import Contact from "views/Contact.js";
import Login from "views/Login.js";
import Register from "views/Register.js";
import '../index.css';
import Footer from "components/Footer/Footer.js";
import Help from "components/Help/Help.js";
const Main = () => {
  return (
    <>
		<Navbar />
		<Switch>
			<Route exact path="/" component={Home} />
			{/* <Route exact path="/services" component={Services} /> */}
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/Register" component={Register} />
			<Route exact path="/help" component={Help} />
			<Redirect to="/" />
		</Switch>
		<Footer fluid />
    </>
  )
}

export default Main;

// export default Dashboard;