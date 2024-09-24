import React, { useState } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  return (
    <div>
      <h2>Budget</h2>
      <input type="number" value={budget} onChange={handleBudgetChange} />
      <p>Your budget is: {budget}</p>
    </div>
  );
};

export default Budget;
