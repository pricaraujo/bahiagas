import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Checklist() {
  const history = useHistory();
  const [checklistItems, setChecklistItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const handleCheckboxChange = (itemName) => {
    const updatedItems = {
      item1: false,
      item2: false,
      item3: false,
      item4: false,
      [itemName]: !checklistItems[itemName],
    };
    setChecklistItems(updatedItems);
  };

  const handleSubmit = () => {
    history.push('/view', { selectedItems: checklistItems });
  };

  return (
    <div>
      <h5>Selecione a simulação</h5>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.item1}
          onChange={() => handleCheckboxChange('item1')}
        />
        <label className="form-check-label">s1</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.item2}
          onChange={() => handleCheckboxChange('item2')}
          disabled={checklistItems.item1 || checklistItems.item3 || checklistItems.item4}
        />
        <label className="form-check-label">s2</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.item3}
          onChange={() => handleCheckboxChange('item3')}
          disabled={checklistItems.item1 || checklistItems.item2 || checklistItems.item4}
        />
        <label className="form-check-label">s3</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checklistItems.item4}
          onChange={() => handleCheckboxChange('item4')}
          disabled={checklistItems.item1 || checklistItems.item2 || checklistItems.item3}
        />
        <label className="form-check-label">s4</label>
      </div>
      <br/>
      <Button onClick={handleSubmit}>Enviar</Button>
    </div>
  );
}

export default Checklist;
