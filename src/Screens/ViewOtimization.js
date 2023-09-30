import React, { useState } from 'react';
import Footer from '../Components/Footer.js';
import Navbar1 from '../Components/Navbar.js';
import { Button } from 'react-bootstrap';
import Formulario from '../Components/Form.js';

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
            <h3>Dados do Manual</h3>
            <Formulario />
          </div>
          <div className="col-md-6">
          <h3>Dados Otimizados</h3>
            <Formulario />
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button variant="primary" onClick={handleCopiarDados}>Usar Dados Otimizados</Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewOtimization;
