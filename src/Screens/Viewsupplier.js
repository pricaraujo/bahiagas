import React from 'react';
import Footer from '../Components/Footer.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navbar1 from '../Components/Navbar.js';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Edit from './ModuleEdit.js';
import { useLocation } from 'react-router-dom';
import OptimizationForm from '../Components/FormSupplier.js';

function ViewSupplier() {
  const location = useLocation();

  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div className="text-center mt-5">
        <h1>Dados de otimização</h1>
        <div className="smaller-form mx-auto">
          <OptimizationForm />
        </div>
        {/* <Link to="/otimization">
            <Button
              style={{
                fontFamily: "Roboto",
                marginRight: "75px",
                marginBottom: "300px",
              }}
            >
              Enviar dados para otimização
            </Button>
          </Link> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ViewSupplier;
