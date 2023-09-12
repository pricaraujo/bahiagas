import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Components/Footer.js'
import Card from '../Components/Card.js'
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar1 from '../Components/Navbar.js';



function Home() {
        return (
            <>
                <div className="container">
                    <Navbar1 />
                </div>
                <div className="container">
                    <h4 style={{ fontFamily: 'Roboto' }}>CATU - ALAGOINHA </h4>
                    <Container>
                        <Row md={4} style={{ position: 'center' }}>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                            <Col style={{ margin: '20px', padding: '0px' }}><Card /></Col>
                        </Row>
                    </Container>
                    <Footer />
                </div>
                </>
    );
    }
export default Home;
