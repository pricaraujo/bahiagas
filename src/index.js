import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Components/Footer.js'
import Card from './Components/Card.js'
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppRoutes from './Route.js';
import Navbar1 from './Components/Navbar.js';



class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <><AppRoutes /></>
    );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));