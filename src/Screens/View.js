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

function View() {
  const location = useLocation();
  const selectedItems = location.state.selectedItems;

  return (
    <>
    <div>
      <Navbar1/>
    </div>
    <div>
      <br/>
      {selectedItems.item1 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S1 aqui */}
        </div>
      )}
      {selectedItems.item2 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S2 aqui */}
        </div>
      )}
      {selectedItems.item3 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S3 aqui */}
        </div>
      )}
      {selectedItems.item4 && (
        <div>
          <h2><FormularioEditavel/></h2>
          {/* Coloque as informações relacionadas a S3 aqui */}
        </div>
      )}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  );
}

export default View;