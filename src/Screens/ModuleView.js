import React from 'react'
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer.js'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

import ModuleImage from '../images/module1.jpg.png'
import Navbar1 from '../Components/Navbar.js'
import Button from 'react-bootstrap/Button';

const ModuleView = () => {

  return (
    <>
    <div>
      <Navbar1 />
    <br/>
    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
      <img src={ModuleImage} alt="Modulo 1" />
    </div>
    <br/>
    <div style={{margin: 'auto', display : 'inline-block',display: 'flex', justifyContent: 'center',
      alignItems: 'center',
      paddingRight: '20px'}}>
    <Form.Select style={{width: '300px', marginRight: '20px'}} aria-label="Default select example">
      <option>Selecione o fornecedor</option>
      <option value="1">ETC Catu</option>
      <option value="2">Origem</option>
    </Form.Select>

    <Form.Select style={{width: '300px', right: '20px'}} aria-label="Default select example">
      <option>Selecione a simulação</option>
      <option value="1">s1</option>
      <option value="2">s2</option>
      <option value="3">s3</option>
      <option value="4">s4</option>
      <option value="5">s5</option>
      <option value="6">s6</option>
    </Form.Select>
    </div>
    <Link style={{margin: 'auto', display : 'inline-block', display: 'flex', justifyContent: 'center',
      alignItems: 'center', marginTop: '30px'}} to="/view">
        <Button variant="primary">Enviar</Button>
        </Link>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default ModuleView;