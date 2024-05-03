import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const OptimizationForm = () => {
  const [formData, setFormData] = useState({
    // Supplier1
    supplier1Volume: '',
    supplier1DewPoint: '',
    supplier1NAmount: '',
    supplier1CO2Amount: '',
    supplier1C1Amount: '',
    supplier1C2Amount: '',
    supplier1C3Amount: '',
    supplier1IC4Amount: '',
    supplier1NC4Amount: '',
    supplier1NEOC5Amount: '',
    supplier1IC5Amount: '',
    supplier1NC5Amount: '',
    supplier1C6PlusAmount: '',
    supplier1O2Amount: '',
    supplier1H2SAmount: '',
    supplier1STAmount: '',
    //Supplier2
    supplier2Volume: '',
    supplier2DewPoint: '',
    supplier2NAmount: '',
    supplier2CO2Amount: '',
    supplier2C1Amount: '',
    supplier2C2Amount: '',
    supplier2C3Amount: '',
    supplier2IC4Amount: '',
    supplier2NC4Amount: '',
    supplier2NEOC5Amount: '',
    supplier2IC5Amount: '',
    supplier2NC5Amount: '',
    supplier2C6PlusAmount: '',
    supplier2O2Amount: '',
    supplier2H2SAmount: '',
    supplier2STAmount: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const jsonData = JSON.stringify({
        cid: "optimization",
        flows: [
          {
            origin: "id4",
            dewPoint: formData.supplier1DewPoint,
            volume: formData.supplier1Volume,
            components: [
              { element: "N", amount: formData.supplier1NAmount },
              { element: "CO2", amount: formData.supplier1CO2Amount },
              { element: "C1", amount: formData.supplier1C1Amount },
              { element: "C2", amount: formData.supplier1C2Amount },
              { element: "C3", amount: formData.supplier1C3Amount },
              { element: "IC4", amount: formData.supplier1IC4Amount },
              { element: "NC4", amount: formData.supplier1NC4Amount },
              { element: "NEOC5", amount: formData.supplier1NEOC5Amount },
              { element: "IC5", amount: formData.supplier1IC5Amount },
              { element: "NC5", amount: formData.supplier1NC5Amount },
              { element: "C6_PLUS", amount: formData.supplier1C6PlusAmount },
              { element: "O2", amount: formData.supplier1O2Amount },
              { element: "H2S", amount: formData.supplier1H2SAmount },
              { element: "ST", amount: formData.supplier1STAmount }
            ]
          },
          {
            origin: "id3",
            dewPoint: formData.supplier2DewPoint,
            volume: formData.supplier2Volume,
            components: [
              { element: "N", amount: formData.supplier2NAmount },
              { element: "CO2", amount: formData.supplier2CO2Amount },
              { element: "C1", amount: formData.supplier2C1Amount },
              { element: "C2", amount: formData.supplier2C2Amount },
              { element: "C3", amount: formData.supplier2C3Amount },
              { element: "IC4", amount: formData.supplier2IC4Amount },
              { element: "NC4", amount: formData.supplier2NC4Amount },
              { element: "NEOC5", amount: formData.supplier2NEOC5Amount },
              { element: "IC5", amount: formData.supplier2IC5Amount },
              { element: "NC5", amount: formData.supplier2NC5Amount },
              { element: "C6_PLUS", amount: formData.supplier2C6PlusAmount },
              { element: "O2", amount: formData.supplier2O2Amount },
              { element: "H2S", amount: formData.supplier2H2SAmount },
              { element: "ST", amount: formData.supplier2STAmount }
            ]
          }
        ]
      });


      const response = await axios.post('https://expert-gas-884de807bc21.herokuapp.com/optimize', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && Object.keys(response.data)[0] && response.data.outcome === 'DONE') {

        var alertMsg = "Fornecedor 1: " + response.data.optimalComposition.Supplier1 +
          ", Fornecedor 2: " + response.data.optimalComposition.Supplier1 +
          ", Preço Otimizado : " + response.data.optimalValue

        alert(alertMsg); // Exibe a resposta da API se a primeira chave é 'DONE' e 'outcome' existe
      } else {
        alert("Não foi possível calcular"); // Exibe esta mensagem se a condição acima não for atendida
      }

    } catch (error) {
      console.error('Error to send form', error)
      alert('Error')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3>Fornecedor 1</h3>

            <Table bordered hover>
              <tbody style={{ margin: '20px' }}>
                <tr>
                  <td colSpan="2" style={{ backgroundColor: '#e6e6e6', fontSize: '18px', textAlign: 'center' }}>
                    Composição
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Volume
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1Volume"
                      type="text"
                      value={formData.supplier1Volume}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Dew Point
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1DewPoint"
                      type="text"
                      value={formData.supplier1DewPoint}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Nitrogênio - N2 (%mol/mol)
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1NAmount"
                      type="text"
                      value={formData.supplier1NAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Dióxido de carbono - CO2
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1CO2Amount"
                      type="text"
                      value={formData.supplier1CO2Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Metano - CH4
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1C1Amount"
                      type="text"
                      value={formData.supplier1C1Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Etano - C2H6
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1C2Amount"
                      type="text"
                      value={formData.supplier1C2Amount}
                      onChange={handleChange}
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
                      name="supplier1C3Amount"
                      type="text"
                      value={formData.supplier1C3Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    i-Butano - C4H10
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1IC4Amount"
                      type="text"
                      value={formData.supplier1IC4Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    n-Butano - C4H10
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1NC4Amount"
                      type="text"
                      value={formData.supplier1NC4Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    i-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1IC5Amount"
                      type="text"
                      value={formData.supplier1IC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    n-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1NC5Amount"
                      type="text"
                      value={formData.supplier1NC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    neo-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1NEOC5Amount"
                      type="text"
                      value={formData.supplier1NEOC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Hexano - C6H14
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1C6PlusAmount"
                      type="text"
                      value={formData.supplier1C6PlusAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    H2S
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1H2SAmount"
                      type="text"
                      value={formData.supplier1H2SAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    ST
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier1STAmount"
                      type="text"
                      value={formData.supplier1STAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <div style={{ marginTop: '20px' }}>
            </div>
          </div>

          <div className="col-md-6">
            <h3>Fornecedor 2</h3>
            <Table bordered hover>
              <tbody style={{ margin: '20px' }}>
                <tr>
                  <td colSpan="2" style={{ backgroundColor: '#e6e6e6', fontSize: '18px', textAlign: 'center' }}>
                    Composição
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Volume
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2Volume"
                      type="text"
                      value={formData.supplier2Volume}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Dew Point
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2DewPoint"
                      type="text"
                      value={formData.supplier2DewPoint}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Nitrogênio - N2 (%mol/mol)
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2NAmount"
                      type="text"
                      value={formData.supplier2NAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Dióxido de carbono - CO2
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2CO2Amount"
                      type="text"
                      value={formData.supplier2CO2Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Metano - CH4
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2C1Amount"
                      type="text"
                      value={formData.supplier2C1Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Etano - C2H6
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2C2Amount"
                      type="text"
                      value={formData.supplier2C2Amount}
                      onChange={handleChange}
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
                      name="supplier2C3Amount"
                      type="text"
                      value={formData.supplier2C3Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    i-Butano - C4H10
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2IC4Amount"
                      type="text"
                      value={formData.supplier2IC4Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    n-Butano - C4H10
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2NC4Amount"
                      type="text"
                      value={formData.supplier2NC4Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    i-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2IC5Amount"
                      type="text"
                      value={formData.supplier2IC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    n-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2NC5Amount"
                      type="text"
                      value={formData.supplier2NC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    neo-Pentano - C5H12
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2NEOC5Amount"
                      type="text"
                      value={formData.supplier2NEOC5Amount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    Hexano - C6H14
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2C6PlusAmount"
                      type="text"
                      value={formData.supplier2C6PlusAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    H2S
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2H2SAmount"
                      type="text"
                      value={formData.supplier2H2SAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
                    ST
                  </td>
                  <td style={{ backgroundColor: '#ffffff' }}>
                    <input
                      style={{ width: '100%', fontSize: '15px' }}
                      name="supplier2STAmount"
                      type="text"
                      value={formData.supplier2STAmount}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div></div>

      <br></br>
      <Button type="submit">Enviar</Button>
    </form>
  );

};

export default OptimizationForm;
