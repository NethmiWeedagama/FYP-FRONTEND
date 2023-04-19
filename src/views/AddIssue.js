
import React from "react";
import axios from 'axios';
// reactstrap components
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
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  projectName: "",
  description: "",
};

function AddIssue() {
  let history = useHistory()
  const [visible, setVisible] = useState(true);

  const [values, setValues] = useState(initialValues);
 
  // function handleSubmit() {
  //   const history = useHistory();
  //   history.push('/admin/dashboard');
  //   // navigate("/admin/dashboard");
  // }
  // let history = useHistory()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const [priority, setPriority] = useState('');
  const [displayTitle, setDisplayTitle] = useState('')
  const [displayDescriprion, setDisplayDescription] = useState('')
  const [displaySeverity, setDisplaySeverity] = useState('')
  const [displayPriority, setDisplayPriority] = useState('')
  const handleClick = (e) =>{
   
    // setDisplayText(values);
    e.preventDefault();
    // console.log(this.state);
    axios({
      method:'post',
      url:"http://localhost:5000/send",
      headers: {'content-type': 'application/json'},
      data:values
    })
        .then(result => {
        
          setVisible(!visible);
          setTitle(result.data.title);
          setDisplayTitle(title)
          setDescription(result.data.description);
          setDisplayDescription(description)
          setSeverity(result.data.severity);
          setDisplaySeverity(severity)
          setPriority(result.data.priority);
          setDisplayPriority(priority)
          console.log(result.data.severity)
          // setDisplayText(resultValue);
          // console.log(result.config.data)
        })
        .catch(error=> {
          console.log(error);
        })
    
  }
  function resetForm() {
    
    setVisible(!visible);
    setValues(initialValues);
    // history.push("/maps")
  }
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <>
      <div className="content">
      {visible  && 
        <Row>
          <Col md="12">
            {/* <Card>
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card> */}
            
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Create Issue</CardTitle>
              </CardHeader>
              <CardBody>
                <Form  onSubmit={handleClick}>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label tag="h5">Defect Title</label>
                        <Input
                         
                          name="title" 
                          placeholder="Issue Title"
                          type="text"
                          value={values.title}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="px-1" md="5">
                      <FormGroup>
                      
   
                        <label>Project Name</label>
                        <Input
                        
                          name="projectName" 
                          placeholder="Project name"
                          type="text"
                          value={values.projectName}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col> */}
                   
                  </Row>
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Defect Description</label>
                        <Input
                          defaultValue=""
                          name="description" 
                          placeholder="Description"
                          type="textarea"
                          // value={text} 
                          // onChange={e => handleChange(e)}
                          value={values.description}
                          onChange={handleInputChange}
                        />
                        
                    
                      </FormGroup>
                    </Col>
                   
                  </Row>

                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        
                      >
                        submit
                      </Button>
                      
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card> 
          </Col>
        </Row>
      }
      {!visible  && 
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Bug Report</CardTitle>
                <p className="card-category">Severity and priority</p>
              </CardHeader>
              <CardBody >
                  <Row>
                    <Col className="pr-1" md="12">
                      <FormGroup>
                        <label>Defect Title</label>
                        {/* <Input
                          defaultValue=""
                          name="description" 
                          placeholder="Description"
                          type="textarea"
                        
                        /> */}
                        {displayTitle && <p>{title}</p>}
                        {/* {displayText && <p>{displayText.projectName}</p>} */}
                        <br />
                        <label>Defect Description</label>
                        
                        {displayDescriprion && <p>{description}</p>}
                        {/* {displayDescriprion && <p>{description}</p>} */}
                      </FormGroup>
                    </Col>
                   
                  </Row>
                 
              </CardBody>
              <CardFooter>
                <hr />
                <Row>
                  <Col md="6">
                  {displaySeverity && 
                  
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-vector text-danger" />
                            </div>
                          </Col>
                          <Col md="8" xs="7">
                            <div className="numbers">
                              <p className="card-category">Severity</p>
                              <CardTitle tag="p">{severity}</CardTitle>
                              <p />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                      {/* <CardFooter>
                        <hr />
                        <div className="stats">
                          <i className="far fa-clock" /> In the last hour
                        </div>
                      </CardFooter> */}
                    </Card>
                  }
                    
                  </Col>
                  <Col md="6">
                  {displayPriority && 
                    
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <i className="nc-icon nc-vector text-danger" />
                            </div>
                          </Col>
                          <Col md="8" xs="7">
                            <div className="numbers">
                              <p className="card-category">Priority</p>
                              <CardTitle tag="p">{priority}</CardTitle>
                              <p />
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    
                    </Card>
                  }
                    
                  </Col>
                </Row>
                <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={resetForm}
                      >
                        Add New Issue
                      </Button>
                      
                    </div>
                  </Row>
              </CardFooter>
            </Card>
          </Col>
        
        </Row>
      }
      </div>
      
      
    </>
  );
}



export default AddIssue;
