import React from 'react';
import Login from './LoginForm.js'
import {
    BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../logo.png';



class Navbar1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Navbar bg="transparent" style={{ fontFamily: 'Ubuntu', color: 'azure' }} expand="lg">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="150"
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">HOME</Nav.Link>
                <Nav.Link href="/about">SOBRE</Nav.Link>
                <div style={{ marginLeft: '600px' }}> <Login /></div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <br />
        </Router>
      </div>
    );
  }
}

export default Navbar1;





