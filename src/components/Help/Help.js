import React from 'react';
import { Component } from 'react';
// import 'react-dropdown/style.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "assets/css/help.css";
import bugReportForm from "assets/img/form.png";
import bugReportTable from "assets/img/bugReportTable.png";
import charts from "assets/img/charts.png";
import twoWayTable from "assets/img/twoWayTable.png";
import exportBtn from "assets/img/export_help.png";
import exportPDF from "assets/img/exportReport.png";
import HelpPageHeader from './HelpPageHeader';


//npm install -s react-animation
import { AnimateOnChange } from 'react-animation'
import {
    Button,
    FormGroup,
    Form,
   
    Input,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Table,
    Row,
    Col
  } from "reactstrap";
const Help = () => {
// class Help extends Component {

    // constructor(props) {
    //     super(props)
    // }

    // render() {
        return (
            <div >
               

                <HelpPageHeader />
                <div className="main-container_d main_container_m" style={{ fontFamily: "Helvetica" }}>
                    {/* <Card> */}
                    
                 
                    {/* </Card> */}
                    <div className="intro_d intro_m">
                        <div className="about_viuwer_d about_viuwer_m " style={{ backgroundColor: "#f0f0f0" }}>
                            <h4 style={{ color: "#2a8b8f" }}>Steps to work with BUGCLASSIFIER</h4>
                            <p style={{ textAlign: "justify", fontSize: "1rem", paddingLeft: "1%", paddingRight: "1%" }}>
                               Enter the software bug report title and bug description in the form that's on the dashbooard of <b>BUGCLASSIFIER</b>. After submitting the form
                               there is a seperate section in the which will display the  relavant severity and priority type of  the bug reports.And those defects are sorted and ranked 
                               according to their severity and priority levels.<b> BUGCLASSIFIER</b> will classify the bug reports according to seven severity levels (Blocker,Critical,Major,Normal,Trivial,Minor and Enhancements)
                               and three priority levels (High ,Medium,Low). And also there is a seperate section that displays the count of severity and priority of bugs reported.</p></div>



                        <div className="teams_d teams_m" >
                            <Typography style={{ fontSize: "1rem", fontWeight: "600", padding: "2%", color: "white", wordSpacing: "0.2rem", letterSpacing: "0.2rem" }}> WIDGETS IN BUGCLASSIFIER</Typography>

                            <div>
                                <Accordion style={{ backgroundColor: "#f5f5f5" }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                    >


                                        <Typography ><p style={{ fontSize: "0.8rem", fontWeight: "100", paddingTop: "3%" }}>ADD ISSUE FORM</p></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        <Row>
                                            <Col className="pr-1" md="7">
                                                <img style={{ border: "1px solid #555"}}src={bugReportForm} />
                                            </Col>
                                            <Col className="pr-1" md="5">
                                                <p> This is the form that the user should enter the bug report title and description first to in order to view the sverity andpriority level of the relavant the software bug report.
      </p>
                                            </Col>
                                        </Row>
                                            {/* <div className="imagesOfWidgets">
                                                
                                            </div>
                                            <div className="description">

                                                <p> This is the text box that the user should enter the YouTube Link first to in order to get the analytics about the video.
                                               user can paste the YouTube url in the text box and press the button called "analyse" to get the results</p>
                                            </div> */}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ backgroundColor: "#f5f5f5" }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                    >


                                        <Typography ><p style={{ fontSize: "0.8rem", fontWeight: "100", paddingTop: "3%" }}>BUG REPORT DETAILS</p></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Row>
                                                <Col className="pr-1" md="7">
                                                    <img style={{ border: "1px solid #555"}}src={bugReportTable} />
                                                </Col>
                                                <Col className="pr-1" md="5">
                                                    <p> This is the Bug report details table where the user will be able to view the severity , priority levels , bug title and the description.
                                                        This table sorts according to the severity and priority levels.And also user will be able to filter the bug reports by their severity and priority levels
                                                </p>
                                                </Col>
                                            </Row>
                                           
                                            {/* <div className="imagesOfWidgets">
                                                
                                            </div>
                                            <div className="description" >

                                                <p > This is the button that the user should press after entering the YouTube Link in the linkbox in order to be displayed the analytics about the video</p>
                                            </div> */}

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ backgroundColor: "#f5f5f5" }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                    >


                                        <Typography ><p style={{ fontSize: "0.8rem", fontWeight: "100", paddingTop: "3%" }}>EXPORT BUG REPORT DETAILS</p></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Row>
                                                <Col className="pr-1" md="7">
                                                    <img style={{ border: "1px solid #555"}}src={exportBtn} />
                                                </Col>
                                                <Col className="pr-1" md="5">
                                                    <p>When click the export button on top of the bug report details table user can download the bug detals including their severity and priority to a PDF file.
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className='pt-2'>
                                                <Col className="pr-1" md="7">
                                                    <img style={{ border: "1px solid #555"}}src={exportPDF} />
                                                </Col>
                                                <Col className="pr-1" md="5">
                                                    <p>This is the structure of the downloaded PDF file.
                                                    </p>
                                                </Col>
                                            </Row>
                                            {/* <div className="imagesOfWidgets">
                                                
                                            </div>
                                            <div className="description" >

                                                <p > This is the button that the user should press after entering the YouTube Link in the linkbox in order to be displayed the analytics about the video</p>
                                            </div> */}

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion style={{ backgroundColor: "#f5f5f5" }}>
                                    <AccordionSummary

                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                    >
                                        <Typography ><p style={{ fontSize: "0.8rem", fontWeight: "100", paddingTop: "3%" }}>STATISTICS</p></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Row>
                                                <Col className="pr-1" md="7">
                                                    <img style={{ border: "1px solid #555"}}src={charts} />
                                                </Col>
                                                <Col className="pr-1" md="5">
                                                    <p> This section displays the count of defects of each severity and priority levels of bug reports</p>
                                                </Col>
                                            </Row>
                                            <Row className='pt-2'>
                                                <Col className="pr-1" md="7">
                                                    <img style={{ border: "1px solid #555"}}src={twoWayTable} />
                                                </Col>
                                                <Col className="pr-1" md="5">
                                                    <p> This section displays the count  of each severity and priority levels of bug reports in a cross table with their severity and priority</p>
                                                </Col>
                                            </Row>
                                            {/* <div className="imagesOfWidgets">
                                                
                                            </div>
                                            <div className="description" >

                                                <p >This is the screen that user can be displayed while loading the results which says user to wait a moment.</p></div> */}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                
                            </div>
                        </div>
                    </div>

                    <div></div>
                    <div className="about_arcane_d ">
                       

                    </div>

                </div>
                {/* <DarkFooter /> */}
            </div>
        );

   
}
export default Help;