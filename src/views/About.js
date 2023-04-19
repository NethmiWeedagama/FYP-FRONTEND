import React from 'react'
// import about from "../images/about.svg";
import Common from './Common';
import about from "assets/img/about.svg";
import pieChart from "assets/img/pie-chart.png";
import priority from "assets/img/priority.png";
import bugClassify from "assets/img/window-bug.png";
import exportfile from "assets/img/export.png";
import { NavLink } from "react-router-dom"
const About = () => {
    return (
        <>
           <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={about} className="img-fluid animated" alt="Home Img"/>
                            </div>
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1 style={{ color: "#2a8b8f" }}> 
                                    What is BUGCLASSIFIER?
                                     {/* {isCompName ? <strong className="brand-name"> {compName}</strong> : ""} */}
                                     
                                </h1>
                                <h2 className="my-3">
                                    {/* We are the team of talented developer making websites */}
                                    <b> BUGCLASSIFIER</b> is a web application that analyses the software bug description by determining the emotions expressed
                                     in the bug reports and classify them according to seven severity levels (Blocker,Critical,Major,Normal,Trivial,Minor and Enhancements)
                                     and three priority levels (High ,Medium,Low) .
                                </h2>
                                <div className="mt-3">
                                    {/* <NavLink to='#features'  className="btn-get-started ">
                                        Contact Now
                                    </NavLink> */}
                                    <a href="#features" className="btn-get-started ">Features</a>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
              
            </div>

            </section>
            <section class="feature_section layout_padding" id='features'>
                    <div class="container">
                    <h2 class="text-uppercase">
                        Our Features
                    </h2>
                    </div>
                    <div class="">
                    <div class="feature_card-container layout_padding2">
                        <div class="feature_card">
                        <div class="feature_img-container">
                            <div class="feature_img-box">
                            <img src={bugClassify} alt="" />
                            </div>
                        </div>
                        <div class="feature_detail-box">
                            <h4>
                            Predict the severity & Priority Levels
                            </h4>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse
                            </p> */}
                        </div>
                        </div>
                        <div class="feature_card">
                        <div class="feature_img-container">
                            <div class="feature_img-box">
                            <img src={priority} alt="" />
                            </div>
                        </div>
                        <div class="feature_detail-box">
                            <h4>
                            Sort and Rank Multiple Bugs acording to the severity and priority levels 
                            </h4>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse
                            </p> */}
                        </div>
                        </div>
                        <div class="feature_card">
                        <div class="feature_img-container">
                            <div class="feature_img-box">
                            <img src={pieChart} alt="" />
                            </div>
                        </div>
                        <div class="feature_detail-box">
                            <h4>
                            Bug Report Statistics
                            </h4>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse
                            </p> */}
                        </div>
                        </div>
                        <div class="feature_card">
                        <div class="feature_img-container">
                            <div class="feature_img-box">
                            <img src={exportfile} alt="" />
                            </div>
                        </div>
                        <div class="feature_detail-box">
                            <h4>
                             Export Bug Details
                            </h4>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse
                            </p> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
        </>
    )
}

export default About