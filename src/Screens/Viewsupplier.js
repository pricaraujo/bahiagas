import React from 'react';
import Footer from '../Components/Footer.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Navbar1 from '../Components/Navbar.js';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Edit from './ModuleEdit.js';
import { useLocation } from 'react-router-dom';
import FormularioEditavel from '../Components/FormSupplier.js';

function ViewSupplier() {
  const location = useLocation();
  const selectedItems = location.state.selectedItems;

  return (
    <>
      <div>
        <Navbar1 />
      </div>
      <div className="text-center mt-5">
        <h2>Dados do fornecedor</h2>
        <div className="smaller-form mx-auto">
          <FormularioEditavel />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ViewSupplier;
