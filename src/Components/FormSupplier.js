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

  const handleSubmit = async(e) => {

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
              { element: "N",       amount: formData.supplier1NAmount      },
              { element: "CO2",     amount: formData.supplier1CO2Amount    },
              { element: "C1",      amount: formData.supplier1C1Amount     },
              { element: "C2",      amount: formData.supplier1C2Amount     },
              { element: "C3",      amount: formData.supplier1C3Amount     },
              { element: "IC4",     amount: formData.supplier1IC4Amount    },
              { element: "NC4",     amount: formData.supplier1NC4Amount    },
              { element: "NEOC5",   amount: formData.supplier1NEOC5Amount  },
              { element: "IC5",     amount: formData.supplier1IC5Amount    },
              { element: "NC5",     amount: formData.supplier1NC5Amount    },
              { element: "C6_PLUS", amount: formData.supplier1C6PlusAmount },
              { element: "O2",      amount: formData.supplier1O2Amount     },
              { element: "H2S",     amount: formData.supplier1H2SAmount    },
              { element: "ST",      amount: formData.supplier1STAmount     }
            ]
          },
          {
            origin: "id3",
            dewPoint: formData.supplier2DewPoint,
            volume: formData.supplier2Volume,
            components: [
              { element: "N",       amount: formData.supplier2NAmount      },
              { element: "CO2",     amount: formData.supplier2CO2Amount    },
              { element: "C1",      amount: formData.supplier2C1Amount     },
              { element: "C2",      amount: formData.supplier2C2Amount     },
              { element: "C3",      amount: formData.supplier2C3Amount     },
              { element: "IC4",     amount: formData.supplier2IC4Amount    },
              { element: "NC4",     amount: formData.supplier2NC4Amount    },
              { element: "NEOC5",   amount: formData.supplier2NEOC5Amount  },
              { element: "IC5",     amount: formData.supplier2IC5Amount    },
              { element: "NC5",     amount: formData.supplier2NC5Amount    },
              { element: "C6_PLUS", amount: formData.supplier2C6PlusAmount },
              { element: "O2",      amount: formData.supplier2O2Amount     },
              { element: "H2S",     amount: formData.supplier2H2SAmount    },
              { element: "ST",      amount: formData.supplier2STAmount     }
            ]
          }
        ]
      });
      
  
      const response = await axios.post('https://expert-gas-884de807bc21.herokuapp.com/optimize', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && Object.keys(response.data)[0] === 'DONE' && response.data.outcome) {
        alert(JSON.stringify(response.data)); // Exibe a resposta da API se a primeira chave é 'DONE' e 'outcome' existe
      } else {
        alert("Não foi possível calcular"); // Exibe esta mensagem se a condição acima não for atendida
      }

    } catch(error) {
      console.error('Error to send form', error)
      alert('Error')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Fornecedor 1</h2>
      <div>        
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Volume
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1Volume"
                type="text"
                value={formData.supplier1Volume}
                onChange={handleChange}
              />
            </div>          
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Dew Point
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1DewPoint"
                type="text"
                value={formData.supplier1DewPoint}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Nitrogênio
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1NAmount"
                type="text"
                value={formData.supplier1NAmount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Dióxido de Carbono - CO2
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1CO2Amount"
                type="text"
                value={formData.supplier1CO2Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Metano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1C1Amount"
                type="text"
                value={formData.supplier1C1Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Etano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1C2Amount"
                type="text"
                value={formData.supplier1C2Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Propano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1C3Amount"
                type="text"
                value={formData.supplier1C3Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Butano - C4H10
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1IC4Amount"
                type="text"
                value={formData.supplier1IC4Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Butano - C4H10
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1NC4Amount"
                type="text"
                value={formData.supplier1NC4Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1IC5Amount"
                type="text"
                value={formData.supplier1IC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1NC5Amount"
                type="text"
                value={formData.supplier1NC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            neo-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1NEOC5Amount"
                type="text"
                value={formData.supplier1NEOC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Hexano - C6H14
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1C6PlusAmount"
                type="text"
                value={formData.supplier1C6PlusAmount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            H2S
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1H2SAmount"
                type="text"
                value={formData.supplier1H2SAmount}
                onChange={handleChange}
              />
            </div>             
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            ST
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier1STAmount"
                type="text"
                value={formData.supplier1STAmount}
                onChange={handleChange}
              />
            </div>              
      </div>
      <br></br>
      <br></br>
      <h2>Fornecedor 2</h2>
      <div>        
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Volume
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2Volume"
                type="text"
                value={formData.supplier2Volume}
                onChange={handleChange}
              />
            </div>          
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Dew Point
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2DewPoint"
                type="text"
                value={formData.supplier2DewPoint}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Nitrogênio
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2NAmount"
                type="text"
                value={formData.supplier2NAmount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Dióxido de Carbono - CO2
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2CO2Amount"
                type="text"
                value={formData.supplier2CO2Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Metano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2C1Amount"
                type="text"
                value={formData.supplier2C1Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Etano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2C2Amount"
                type="text"
                value={formData.supplier2C2Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Propano
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2C3Amount"
                type="text"
                value={formData.supplier2C3Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Butano - C4H10
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2IC4Amount"
                type="text"
                value={formData.supplier2IC4Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Butano - C4H10
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2NC4Amount"
                type="text"
                value={formData.supplier2NC4Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            i-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2IC5Amount"
                type="text"
                value={formData.supplier2IC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            n-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2NC5Amount"
                type="text"
                value={formData.supplier2NC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            neo-Pentano - C5H12
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2NEOC5Amount"
                type="text"
                value={formData.supplier2NEOC5Amount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            Hexano - C6H14
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2C6PlusAmount"
                type="text"
                value={formData.supplier2C6PlusAmount}
                onChange={handleChange}
              />
            </div>
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            H2S
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2H2SAmount"
                type="text"
                value={formData.supplier2H2SAmount}
                onChange={handleChange}
              />
            </div>             
            <div style={{ backgroundColor: '#f2f2f2', fontSize: '15px' }}>
            ST
            </div>
            <div style={{ backgroundColor: '#ffffff' }}>
              <input
                style={{ width: '100%', fontSize: '15px' }}
                name="supplier2STAmount"
                type="text"
                value={formData.supplier2STAmount}
                onChange={handleChange}
              />
            </div>              
      </div>
      <br></br>
      <Button type="submit">Enviar</Button>
    </form>
  );

};

export default OptimizationForm;
