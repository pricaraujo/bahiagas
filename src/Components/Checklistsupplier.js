import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Checkl() {
  const history = useHistory();
  const [checklistItems, setChecklistItems] = useState({
    sup1: false,
    sup2: false,
  });

  const handleCheckboxChange = (itemName) => {
    const updatedItems = {
      sup1: false,
      sup2: false,
      [itemName]: !checklistItems[itemName],
    };
    setChecklistItems(updatedItems);
  };

  const handleSubmit = () => {
    history.push('/view/supplier', { selectedItems: checklistItems });
  };

  return (
    <div>
      <h5>Selecione o fornecedor</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.sup1}
          onChange={() => handleCheckboxChange('sup1')}
        />
        <label className="form-check-label">ETC CATU</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.sup2}
          onChange={() => handleCheckboxChange('sup2')}
          disabled={checklistItems.sup1}
        />
        <label className="form-check-label">Origem</label>
      </div>
      <br/>
      <Button onClick={handleSubmit}>Enviar</Button>
    </div>
  );
}

export default Checkl;
