import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Checklist(props) {
  const history = useHistory();
  
  const [checklistItems, setChecklistItems] = useState([
    { id: 's1', checked: false, result: props.result[0].Result },
    { id: 's2', checked: false, result: props.result[1].Result },
    { id: 's3', checked: false, result: props.result[2].Result },
    { id: 's4', checked: false, result: props.result[3].Result },
  ]);

  const handleCheckboxChange = (itemId) => {
    const updatedItems = checklistItems.map(item =>
      item.id === itemId ? { ...item, checked: !item.checked, result: item.result } : item
    );
    setChecklistItems(updatedItems);
  };

  const handleSubmit = () => {
    const selectedItems = checklistItems.filter(item => item.checked);
    history.push('/view', { selectedItems });
  };

  return (
    <div>
      <h5>Selecione a simulação</h5>
      {checklistItems.map(item => (
        <div key={item.id} className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckboxChange(item.id)}
          />
          <label className="form-check-label">{item.id}</label>
        </div>
      ))}
      <br />
      <Button onClick={handleSubmit}>Enviar</Button>
    </div>
  );
}

export default Checklist;
