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
import Formulario from '../Components/Form.js';

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
      {selectedItems[0]?.checked && (
       <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados de Step 1</h3>
           <Formulario result = {selectedItems[0].result}/>
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
         <Formulario result = {selectedItems[0].result}/>
         </div>
       </div>
       </div>
      )}
      {selectedItems[1]?.checked && (
        <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados de Step 2</h3>
           <Formulario result = {selectedItems[1].result}/>
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
         <Formulario result = {selectedItems[1].result}/>
         </div>
       </div>
       </div>
      )}
      {selectedItems[2]?.checked && (
          <div className="container">
       <br />/
       <div className="row">
         <div className="col-md-6">
           <h3>Dados de Step 3</h3>
           <Formulario result = {selectedItems[2].result}/>
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
         <Formulario result = {selectedItems[2].result}/>
         </div>
       </div>
       </div>
      )}
      {selectedItems[3]?.checked && (
         <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados de Step 4</h3>
           <Formulario result = {selectedItems[3].result}/>
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
           <Formulario result = {selectedItems[3].result}/>
         </div>
       </div>
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
