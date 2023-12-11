import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

function FormularioEditavel() {
  const [info1, setInfo1] = useState('0.0151');
  const [info2, setInfo2] = useState('0.034');
  const [info3, setInfo3] = useState('0.571');
  const [info4, setInfo4] = useState('0.0095');
  const [info5, setInfo5] = useState('0.010');
  const [info6, setInfo6] = useState('0.893');
  const [info7, setInfo7] = useState('0.132');
  const [info8, setInfo8] = useState('0.0457');
  const [info9, setInfo9] = useState('0.01296');
  const [info10, setInfo10] = useState('0.00487');
  const [info11, setInfo11] = useState('0.076');
  const [info12, setInfo12] = useState('0.01097');
  const [indiceWobbe, setIndiceWobbe] = useState('');
  const [poderCalorifico, setPoderCalorifico] = useState('');
  const [numeroMetano, setNumeroMetano] = useState('');
  const [compressibilidade, setCompressibilidade] = useState('');
  const [densidadeRelativa, setDensidadeRelativa] = useState('');
  const [densidadeAbsoluta, setDensidadeAbsoluta] = useState('');

  const handleInputChange = (e, setterFunction) => {
    const newValue = e.target.value;
    setterFunction(newValue);
  };

  return (
    <Table bordered hover>
      <tbody style={{ margin: '20px' }}>
        <tr>
          <td colSpan="2" style={{ backgroundColor: '#e6e6e6', fontSize: '18px', textAlign: 'center' }}>
            Parâmetros de Qualidade
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Índice de Wobbe (kcal/m³)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={indiceWobbe}
              onChange={(e) => handleInputChange(e, setIndiceWobbe)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Poder Calorífico Superior (kcal/m³)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={poderCalorifico}
              onChange={(e) => handleInputChange(e, setPoderCalorifico)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Número de Metano
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={numeroMetano}
              onChange={(e) => handleInputChange(e, setNumeroMetano)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Compressibilidade
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={compressibilidade}
              onChange={(e) => handleInputChange(e, setCompressibilidade)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Densidade Relativa
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={densidadeRelativa}
              onChange={(e) => handleInputChange(e, setDensidadeRelativa)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Densidade Absoluta (kg/m³)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={densidadeAbsoluta}
              onChange={(e) => handleInputChange(e, setDensidadeAbsoluta)}
            />
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ backgroundColor: '#e6e6e6', fontSize: '18px', textAlign: 'center' }}>
            Composição
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Nitrogênio - N2 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info1}
              onChange={(e) => handleInputChange(e, setInfo1)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Dióxido de carbono - CO2 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info2}
              onChange={(e) => handleInputChange(e, setInfo2)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Metano - CH4 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info3}
              onChange={(e) => handleInputChange(e, setInfo3)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Etano - C2H6 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info4}
              onChange={(e) => handleInputChange(e, setInfo4)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Propano - C3H8 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info5}
              onChange={(e) => handleInputChange(e, setInfo5)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Butano - C4H10 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info6}
              onChange={(e) => handleInputChange(e, setInfo6)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Butano - C4H10 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info7}
              onChange={(e) => handleInputChange(e, setInfo7)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Pentano - C5H12 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info8}
              onChange={(e) => handleInputChange(e, setInfo8)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Pentano - C5H12 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info9}
              onChange={(e) => handleInputChange(e, setInfo9)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            neo-Pentano - C5H12 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info10}
              onChange={(e) => handleInputChange(e, setInfo10)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Hexano - C6H14 (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info11}
              onChange={(e) => handleInputChange(e, setInfo11)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Inertes (N2+CO2) (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info12}
              onChange={(e) => handleInputChange(e, setInfo12)}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FormularioEditavel;
