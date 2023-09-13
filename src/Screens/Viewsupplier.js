import React from 'react'
import Footer from '../Components/Footer.js'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

import Navbar1 from '../Components/Navbar.js'
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Edit from './ModuleEdit.js'
import { useLocation } from 'react-router-dom';
import FormularioEditavel from '../Components/Form.js';

function ViewSupplier() {
  const location = useLocation();
  const selectedItems = location.state.selectedItems;

  return (
    <>
    <div>
      <Navbar1/>
    </div>
    <div>
      <br/>
      {selectedItems.sup1 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S1 aqui */}
        </div>
      )}
      {selectedItems.sup2 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S2 aqui */}
        </div>
      )}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default ViewSupplier;