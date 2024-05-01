import React, { useState } from 'react';
import Footer from '../Components/Footer.js';
import Navbar1 from '../Components/Navbar.js';
import { Button } from 'react-bootstrap';
import Formulario from '../Components/Form.js';
import OtimizationImage from '../images/otimization-icons.png';
import axios from 'axios'

function ViewOtimization() {

  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  axios
    .post("https://expert-gas-884de807bc21.herokuapp.com/optimize", {
      "cid": "optimization",
      "flows": [
        {
          "origin": "id4",
          "dewPoint": 50.0,
          "volume": 1453.125,
          "components": [
            {
              "element": "N",
              "amount": 0.011
            },
            {
              "element": "CO2",
              "amount": 0.0085
            },
            {
              "element": "C1",
              "amount": 0.883
            },
            {
              "element": "C2",
              "amount": 0.090
            },
            {
              "element": "C3",
              "amount": 0.0058
            },
            {
              "element": "IC4",
              "amount": 0.059
            },
            {
              "element": "NC4",
              "amount": 0.000002399108
            },
            {
              "element": "NEOC5",
              "amount": 0.00003522207
            },
            {
              "element": "IC5",
              "amount": 5.927821E-7
            },
            {
              "element": "NC5",
              "amount": 9.536117E-6
            },
            {
              "element": "C6_PLUS",
              "amount": 1.574795E-4
            },
            {
              "element": "O2",
              "amount": 0
            },
            {
              "element": "H2S",
              "amount": 0
            },
            {
              "element": "ST",
              "amount": 0
            }
          ]
        },
        {
          "origin": "id3",
          "dewPoint": 0.0,
          "volume": 0,
          "components": [
            {
              "element": "N",
              "amount": 0.011273547093159898
            },
            {
              "element": "CO2",
              "amount": 0.008148618601339723
            },
            {
              "element": "C1",
              "amount": 0.8854109926132044
            },
            {
              "element": "C2",
              "amount": 0.08989655430634205
            },
            {
              "element": "C3",
              "amount": 0.0051075911438645
            },
            {
              "element": "IC4",
              "amount": 0.060080912424715284
            },
            {
              "element": "NC4",
              "amount": 0.0000023991080000001794
            },
            {
              "element": "NEOC5",
              "amount": 0.000035222069999993014
            },
            {
              "element": "IC5",
              "amount": 0.000001139653935814908
            },
            {
              "element": "NC5",
              "amount": 0.0000061441035598157555
            },
            {
              "element": "C6_PLUS",
              "amount": 0.0001654761539016447
            },
            {
              "element": "O2",
              "amount": 9.72551239853848e-50
            },
            {
              "element": "H2S",
              "amount": 0
            },
            {
              "element": "ST",
              "amount": 0
            }
          ]
        }
      ]
    }
    )
    .then((response) => {
      const apiResponse = response.data;
      console.log(apiResponse)
    })
    .catch((error) => {
      console.error("Erro na chamada da API:", error);
    });

  return (
    <>
      <Navbar1 />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-6">
          <h3>Dados Otimizados</h3>
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
