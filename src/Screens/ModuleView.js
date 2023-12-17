import React from "react";
import Form from "react-bootstrap/Form";
import Footer from "../Components/Footer.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ModuleImage from "../images/module1.jpg.png";
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
    .post("https://expert-gas-884de807bc21.herokuapp.com/measure", {
      cid: "teste-teste",
      client: "BAHIAGAS",
      measuredAt: "2021-12-10T13:49:51",
      flows: [
        {
          origin: "ETC-CATU",
          dewPoint: 100.0,
          volume: 1264,
          components: [
            {
              element: "N",
              amount: 0.4302,
            },
            {
              element: "CO2",
              amount: 0.0019,
            },
            {
              element: "C1",
              amount: 1.5988,
            },
            {
              element: "C2",
              amount: 0.5082,
            },
            {
              element: "C3",
              amount: 0.467,
            },
            {
              element: "IC4",
              amount: 0.0614,
            },
            {
              element: "NC4",
              amount: 0.0997,
            },
            {
              element: "NEOC5",
              amount: 9.7543,
            },
            {
              element: "IC5",
              amount: 0.0255,
            },
            {
              element: "NC5",
              amount: 0.0269,
            },
            {
              element: "C6_PLUS",
              amount: 0.0028,
            },
            {
              element: "O2",
              amount: 2.2162,
            },
          ],
        },
        {
          origin: "PE-ORIGEM",
          dewPoint: 35.7,
          volume: 100,
          components: [
            {
              element: "N",
              amount: 0.004551,
            },
            {
              element: "CO2",
              amount: 0.003666,
            },
            {
              element: "C1",
              amount: 0.84643,
            },
            {
              element: "C2",
              amount: 0.05454,
            },
            {
              element: "C3",
              amount: 0.001807,
            },
            {
              element: "IC4",
              amount: 0.000838,
            },
            {
              element: "NC4",
              amount: 0.001001,
            },
            {
              element: "NEOC5",
              amount: 0.00000337,
            },
            {
              element: "IC5",
              amount: 0.0000334,
            },
            {
              element: "NC5",
              amount: 0.0000174,
            },
            {
              element: "C6_PLUS",
              amount: 0.000734,
            },
            {
              element: "O2",
              amount: 0.0,
            },
          ],
        },
        {
          origin: "ERPM-ITAIPAVA",
          dewPoint: 50.0,
          volume: 0,
          components: [
            {
              element: "N",
              amount: 0.4302,
            },
            {
              element: "CO2",
              amount: 0.0019,
            },
            {
              element: "C1",
              amount: 1.5988,
            },
            {
              element: "C2",
              amount: 0.5082,
            },
            {
              element: "C3",
              amount: 0.467,
            },
            {
              element: "IC4",
              amount: 0.0614,
            },
            {
              element: "NC4",
              amount: 0.0997,
            },
            {
              element: "NEOC5",
              amount: 9.7543,
            },
            {
              element: "IC5",
              amount: 0.0255,
            },
            {
              element: "NC5",
              amount: 0.0269,
            },
            {
              element: "C6_PLUS",
              amount: 0.0028,
            },
            {
              element: "O2",
              amount: 2.2162,
            },
          ],
        },
      ],
    })
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

  return (
    <>
      <div>
        <Navbar1 />
        <br />
        <h4 style={{ fontFamily: "Roboto", marginLeft: "75px" }}>
          CATU - ALAGOINHA{" "}
        </h4>
        <div className="d-flex justify-content-center align-items-center">
          <Checkl />
          <img src={ModuleImage} alt="Modulo 1" />
          <Link to="/view/otimization">
            <Button
              style={{
                fontFamily: "Roboto",
                marginRight: "75px",
                marginBottom: "300px",
              }}
            >
              Ver otimização
            </Button>
          </Link>
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
