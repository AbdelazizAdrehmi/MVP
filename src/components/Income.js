import React, { useState } from 'react';

const Income = () => {
  const [income, setIncome] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <h2>Income</h2>
      <input type="number" value={income} onChange={handleIncomeChange} />
      <p>Your income is: {income}</p>
    </div>
  );
};

export default Income;
