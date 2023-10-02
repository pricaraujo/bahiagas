import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

function FormularioEditavel() {
  const [info1, setInfo1] = useState('1,00000');
  const [info2, setInfo2] = useState('2,00000');
  const [info3, setInfo3] = useState('3,00000');
  const [info4, setInfo4] = useState('4,00000');
  const [info5, setInfo5] = useState('5,00000');
  const [info6, setInfo6] = useState('6,00000');
  const [info7, setInfo7] = useState('7,00000');
  const [info8, setInfo8] = useState('8,00000');
  const [info9, setInfo9] = useState('9,00000');
  const [info10, setInfo10] = useState('10,00000');
  const [info11, setInfo11] = useState('11,00000');
  const [info12, setInfo12] = useState('12,00000');
  const [info13, setInfo13] = useState('13,00000');
  const [info14, setInfo14] = useState('14,00000');

  const handleInputChange = (e, setterFunction) => {
    const newValue = e.target.value;
    setterFunction(newValue);
  };

  return (
    <Table bordered hover>
      <tbody style={{marign: '20px'}}>
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
              onChange={(e) => handleInputChange(e, setInfo6)}
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
              onChange={(e) => handleInputChange(e, setInfo6)}
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
              onChange={(e) => handleInputChange(e, setInfo6)}
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
              onChange={(e) => handleInputChange(e, setInfo6)}
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
              onChange={(e) => handleInputChange(e, setInfo6)}
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
              onChange={(e) => handleInputChange(e, setInfo6)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
          C4+ (%mol/mol)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info13}
              onChange={(e) => handleInputChange(e, setInfo6)}
            />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
          Vazão (m³/h)
          </td>
          <td style={{ backgroundColor: '#ffffff' }}>
            <input
              style={{ width: '100%', fontSize: '15px' }}
              type="text"
              value={info14}
              onChange={(e) => handleInputChange(e, setInfo6)}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FormularioEditavel;
