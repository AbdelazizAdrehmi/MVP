// Import React and useState hook
import React, { useState } from 'react';

// Define the Income component
const Income = () => {
  // Initialize the income state with a value of 0
  const [income, setIncome] = useState(0);

  // Define a function to handle changes to the income input field
  const handleIncomeChange = (e) => {
    // Update the income state with the new value
    setIncome(e.target.value);
  };

  // Render the Income component
  return (
    <div>
      <h2>Income</h2>
      {/* Input field for setting the income */}
      <input type="number" value={income} onChange={handleIncomeChange} />
      {/* Display the current income value */}
      <p>Your income is: {income}</p>
    </div>
  );
};

// Export the Income component
export default Income;
