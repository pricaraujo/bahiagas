import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer.js';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import ModuleImage from '../images/module1.jpg.png';
import Navbar1 from '../Components/Navbar.js';
import Button from 'react-bootstrap/Button';
import Checklist from '../Components/ChecklistSimulation.js';
import Checkl from '../Components/Checklistsupplier.js';

const ModuleView = () => {
  return (
    <>
      <div>
        <Navbar1 />
        <br />
        <h4 style={{ fontFamily: 'Roboto', marginLeft: '75px' }}>CATU - ALAGOINHA </h4>
        <div className="d-flex justify-content-center align-items-center">
          <Checkl />
          <img src={ModuleImage} alt="Modulo 1" />
          <Checklist />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default ModuleView;
