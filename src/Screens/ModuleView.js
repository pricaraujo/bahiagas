import React from "react";
import Form from "react-bootstrap/Form";
import Footer from "../Components/Footer.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ModuleImage from "../images/modulo1.jpg.png";
import Navbar1 from "../Components/Navbar.js";
import Button from "react-bootstrap/Button";
import Checklist from "../Components/ChecklistSimulation.js";
import Checkl from "../Components/Checklistsupplier.js";
import axios from "axios";
import { useState } from "react";
function ModuleView() {
  const [resultValue, setResult] = useState({})
  const [buildCheckList, setBuildCheckList] = useState(false)

  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .get("https://expert-gas-884de807bc21.herokuapp.com/measure/latest/1", {})
    .then((response) => {
      const apiResponse = response.data;
      const steps = apiResponse.split("Step").filter(Boolean);

      const result = steps.map((step) => {
        const stepInfo = step.split(". Result: ")[1];
        const components = stepInfo.split("Componente=")[1].split(", ");

        const componentInfo = components.reduce((acc, component) => {
          const [key, value] = component.split("=");
          acc[key] = parseFloat(value);
          return acc;
        }, {});

        return {
          Result: {
            Componente: componentInfo,
          },
        };
      });
      
      setResult(result);
      setBuildCheckList(true)
    })
    .catch((error) => {
      // console.error("Erro na chamada da API:", error);
    });

  const handleOptimizationSubmit = async () => {

      try {

      const response = await axios.get('https://expert-gas-884de807bc21.herokuapp.com/measure/optimization/latest', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && Object.keys(response.data)[0] && response.data.outcome === 'DONE') {

        var alertMsg = "Fornecedor 1: " + response.data.optimalComposition.Supplier1.toFixed(3) +
          ", Fornecedor 2: " + response.data.optimalComposition.Supplier2.toFixed(3) +
          ", Preço Otimizado : " + response.data.optimalValue.toFixed(2)

        alert(alertMsg);
      } else {
        alert("Não foi possível calcular");
      }

    } catch (error) {
      console.error('Error to send form', error)
      alert('Error')
    }
  };  

  return (
    <>
      <div>
        <Navbar1 />
        <br />
        <h4 style={{ fontFamily: "Roboto", marginLeft: "75px" }}>
          CATU - ALAGOINHAS{" "}
        </h4>
        <div className="d-flex justify-content-center align-items-center">
          <Checkl />
          <div>
            <img src={ModuleImage} alt="Modulo 1" />
            <br/>
            <Button style={{ marginLeft: "30%"}} onClick={handleOptimizationSubmit}>Otimização da mistura</Button>
          </div>
          { buildCheckList && <Checklist result={resultValue} />}          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default ModuleView;
