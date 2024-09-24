// Import React and useState hook
import React, { useState } from 'react';

// Define the Budget component
const Budget = () => {

// Initialize the budget state with a value of 0
  const [budget, setBudget] = useState(0);


  // Define a function to handle changes to the budget input field
  const handleBudgetChange = (e) => {

 // Update the budget state with the new value
    setBudget(e.target.value);
  };

// Render the Budget component
  return (
    <div>
      <h2>Budget</h2>
      <input type="number" value={budget} onChange={handleBudgetChange} />
      <p>Your budget is: {budget}</p>
    </div>
  );
};

// Export the Budget component
export default Budget;
