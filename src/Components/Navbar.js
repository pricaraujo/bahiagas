import React from 'react';
import Login from './LoginForm.js'
import {
    BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';

class Navbar1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }


    render(){
        return(

<div className="container">
      <Router>
      <Navbar bg="transparent" style={{fontFamily: 'Ubuntu'}}expand="lg">
        <Navbar.Brand href="#home">EXPERT-GÁS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">SOBRE</Nav.Link>
            <div style = {{ paddingLeft: '700px' }}> <Login/></div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br/>
      </Router>
</div>

);
    }
}

export default Navbar1;