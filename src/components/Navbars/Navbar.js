import React from "react";

import {NavLink } from "react-router-dom"
import logo from "logo.svg";
import logoBug from"assets/img/bug-hosting.svg";
const Navbar = () => {
  return (
    <>
      <div className=" nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="navigationbar container-fluid">
              <div className="logo">
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={logoBug} alt="react-logo" />
                  </div>
                </a>
                <a
                  href="/"
                  className="navigationbar  simple-txt logo-normal"
                >
                  BugClassifier
                </a>
              </div>
                {/* <NavLink  exact className="navbar-brand" to="/">
                  Company Name
                </NavLink> */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="mainNavbar navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact
                        className="mainNavlink nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className=" mainNavlink nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className=" mainNavlink nav-link" to="/admin/dashboard">
                        Product
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/help">
                        Help
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/login">
                        LogIn
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/register">
                        SignUp
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
