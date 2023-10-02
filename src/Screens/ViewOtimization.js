import React, { useState } from 'react';
import Footer from '../Components/Footer.js';
import Navbar1 from '../Components/Navbar.js';
import { Button } from 'react-bootstrap';
import Formulario from '../Components/Form.js';
import OtimizationImage from '../images/otimization-icons.png';

function ViewOtimization() {
  const [copiarDados, setCopiarDados] = useState(false);

  const handleCopiarDados = () => {
    setCopiarDados(true);
  };

  return (
    <>
      <Navbar1 />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3>Dados Simulados</h3>
            <Formulario />
          </div>
          <div className="col-md-6">
          <h3>Dados Otimizados</h3>
            <Formulario />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <img src={OtimizationImage} alt="Modulo 1" style={{ alignSelf: 'center', maxWidth: '50%', maxHeight: '50%' }} />
    </div>
      <Footer />
    </>
  );
}

export default ViewOtimization;
