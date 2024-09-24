import React, { useState } from 'react';

const Savings = () => {
  const [savings, setSavings] = useState(0);

  const handleSavingsChange = (e) => {
    setSavings(e.target.value);
  };

  return (
    <div>
      <h2>Savings</h2>
      <input type="number" value={savings} onChange={handleSavingsChange} />
      <p>Your savings is: {savings}</p>
    </div>
  );
};

export default Savings;
