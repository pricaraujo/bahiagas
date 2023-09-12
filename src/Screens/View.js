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

function View() {
  return (
    <>
    <div>
      <Navbar1/>
    </div>
    <div>
      <br/>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Simulação</Accordion.Header>
        <Accordion.Body>
        <p>"
	"cid": "teste-teste",
	"client": "BAHIAGAS",
	"measuredAt": "2021-12-10T13:49:51",
	"flows": 
			"origin": "ETC-CATU",
			"dewPoint": 100.0,
			"volume": 1264,
			"components": 
					"element": "N",
					"amount": 0.4302

					"element": "CO2",
					"amount": 0.0019

					"element": "C1",
					"amount": 1.5988

					"element": "C2",
					"amount": 0.5082

					"element": "C3",
					"amount": 0.4670

					"element": "IC4",
					"amount": 0.0614

					"element": "NC4",
					"amount": 0.0997

					"element": "NEOC5",
					"amount": 9.7543

					"element": "IC5",
					"amount": 0.0255

					"element": "NC5",
					"amount": 0.0269

					"element": "C6_PLUS",
					"amount": 0.0028

					"element": "O2",
					"amount": 2.2162
				
			"origin": "PE-ORIGEM",
			"dewPoint": 35.7,
			"volume": 100,
			"components": 
					"element": "N",
					"amount": 0.004551

					"element": "CO2",
					"amount": 0.003666

					"element": "C1",
					"amount": 0.84643

					"element": "C2",
					"amount": 0.05454

					"element": "C3",
					"amount": 0.001807

					"element": "IC4",
					"amount": 0.000838

					"element": "NC4",
					"amount": 0.001001

					"element": "NEOC5",
					"amount": 0.00000337
				
					"element": "IC5",
					"amount": 0.0000334
				
					"element": "NC5",
					"amount": 0.0000174
				
					"element": "C6_PLUS",
					"amount": 0.000734
				
					"element": "O2",
					"amount": 0.00
				</p>

        </Accordion.Body>
      </Accordion.Item>
      <br/>
      
        <Accordion.Item eventKey="1">
        <Accordion.Header>Simular:</Accordion.Header>
        <Accordion.Body>
        <h3>Step1.</h3> <h4>Result:</h4> Volume=0.0 DewPoint=0.0 Componente= NEOC5= 9.729653868054948, N= 0.42913719357539115, C1= 1.596906069845914, C3=0.465869408682056, NC4=0.09947312295029179, NC5=0.026857255048605692, CO2=0.0019204872252244893, O2=2.2106072404424215, IC4=0.06126999464487178, C6_PLUS=0.002805564431542454, C2=0.5070410806669308, IC5=0.025460796050496337
        <h3>Step2.</h3> <h4>Result:</h4> Volume=0.0 DewPoint=0.0 Componente= NEOC5= 8.994566673435843, N= 0.3970712952734457, C1= 1.540213434949968, C3=0.430851739420039, NC4=0.09205493902712683, NC5=0.02485353345593798, CO2=0.0020676774796203213, O2=2.043599710157489, IC4=0.05672627818887605, C6_PLUS=0.0026593616003897725, C2=0.4728419636455149, IC5=0.023563752324963876
        <h3>Step3.</h3> <h4>Result:</h4> Volume=0.0 DewPoint=0.0 Componente= NEOC5= 8.972849584769499, N= 0.39613568402527044, C1= 1.5385450822168514, C3=0.4298586471566044, NC4=0.0918565995355149, NC5=0.02481763016590788, CO2=0.0020868511312572323, O2=2.038672099036125, IC4=0.05661333354019575, C6_PLUS=0.002665019285786047, C2=0.471819889153766, IC5=0.02353096663561499
Step4. Result:Volume=0.0DewPoint=0.0Componente=NEOC5=8.951184989668775, N=0.3952023342943362, C1=1.536880762150588, C3=0.4288679553509234, NC4=0.09165873946116164, NC5=0.02478181365968844, CO2=0.0021059784372096176, O2=2.0337563987137495, IC4=0.05650066189621772, C6_PLUS=0.0026706632956807795, C2=0.470800285174304, IC5=0.023498260194353266
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div> <Edit/></div>

    <div>
      <Footer/>
    </div>
    </>
  );
}

export default View;