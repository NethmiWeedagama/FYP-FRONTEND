
import React from "react";

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
  Table,
  Input,
  Row,
  Col
} from "reactstrap";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
function User(props) {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  // const session = Cookies.get('session');
  // useEffect(() => {
  //  axios.get('http://localhost:5000/user', { withCredentials: true })
  //   .then((response) => {
  //     const storedUser = sessionStorage.getItem('user');
  //     if (storedUser) {
  //       setUser(JSON.parse(storedUser));
  //     }
  //     console.log(response)
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }, []);
 
  
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // function handleLogout() {
    const handleLogout = async () => {
      await fetch('http://localhost:5000/logout');
      sessionStorage.removeItem('user');
      history.push('/login');
      // Redirect to login page
    };
  //   sessionStorage.removeItem('user');
  //   history.push('/login');
  // }
 const deleteAccount= async () => {
    const username = user.username;
    // await axios.delete('http://localhost:5000/deleteProfile', {
    //   data: { username },
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // })
    //   .then((response) => {
    //     // handle success response
    //     console.log(response);
    //     history.push('/');
    //   })
    //   .catch((error) => {
    //     // handle error response
    //     console.log(error);
    //   });
      await axios({
        method:'delete',
        url:"http://localhost:5000/deleteProfile",
        headers: {'content-type': 'application/json'},
        data: { username }
      })
          .then(response => {
            alert("confirm delete");
            history.push('/');
            
           
            
          })
          .catch(error=> {
            console.log(error);
          })
  }
  return (
    <>
    {user && (
      <div className="content ">
        <Row>
          <Col md="6">
            <Card className="card-user">
              <div className="image">
                <img style={{ width: "100%" }} alt="..." src={require("assets/img/cover.jpg")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/default-avatar.png")}
                    />
                    <h5 className="title">{user.username}</h5>
                  </a>
                  <p className="text-center">{user.email}</p>
                </div>
                <p className="description text-center">
                 
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    {/* <Col className="ml-auto" lg="3" md="6" xs="6">
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Edit Profile
                        </Button>
                      </div>
                    </Col> */}
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <div className="delete ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="danger"
                            type="submit"
                            onClick={deleteAccount}
                          >
                            Delete Profile
                          </Button>
                        </div>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <div className="delete ml-auto mr-auto">
                          <Button
                            className="btn-round"
                            color="warning"
                            type="submit"
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </div>
                    </Col>
                    
                    
                  </Row>
                </div>
              </CardFooter>
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                        <span className="text-muted">
                          <small>Offline</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Creative Tim <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-danger">
                          <small>Busy</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card> */}
          </Col>
          
        </Row>
      </div>
      )}
       {!user && (
      <div className="content ">
        <Row>
          <Col md="6">
            <Card className="card-user">
              <div className="image">
                {/* <img style={{ width: "100%" }} alt="..." src={require("assets/img/cover.jpg")} /> */}
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/default-avatar.png")}
                    />
                    {/* <h5 className="title">Chet Faker</h5> */}
                  </a>
                  <p className="description">User Not Logged In</p>
                </div>
                <p className="description text-center">
                 
                </p>
              </CardBody>
              
            </Card>
            {/* <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        DJ Khaled <br />
                        <span className="text-muted">
                          <small>Offline</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        Creative Tim <br />
                        <span className="text-success">
                          <small>Available</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </div>
                      </Col>
                      <Col className="col-ms-7" xs="7">
                        Flume <br />
                        <span className="text-danger">
                          <small>Busy</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card> */}
          </Col>
          
        </Row>
      </div>
      )}
   
    </>
    
  );
}

export default User;
