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
      {selectedItems.item1 && (
       <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados do Usuário</h3>
           <Formulario />
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
           <Formulario />
         </div>
       </div>
       </div>
      )}
      {selectedItems.item2 && (
        <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados do Usuário</h3>
           <Formulario />
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
           <Formulario />
         </div>
       </div>
       </div>
      )}
      {selectedItems.item3 && (
          <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados do Usuário</h3>
           <Formulario />
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
           <Formulario />
         </div>
       </div>
       </div>
      )}
      {selectedItems.item4 && (
         <div className="container">
       <br />
       <div className="row">
         <div className="col-md-6">
           <h3>Dados do Usuário</h3>
           <Formulario />
               <div style={{ marginTop: '20px' }}>
         <Button variant="primary">Usar Dados Automáticos</Button>
       </div>
         </div>
         <div className="col-md-6">
         <h3>Dados Automáticos</h3>
           <Formulario />
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
