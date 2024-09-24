// Import React and useState hook
import React, { useState } from 'react';

// Define the Savings component
const Savings = () => {
  // Initialize the savings state with a value of 0
  const [savings, setSavings] = useState(0);

  // Define a function to handle changes to the savings input field
  const handleSavingsChange = (e) => {
    // Update the savings state with the new value
    setSavings(e.target.value);
  };

  // Render the Savings component
  return (
    <div>
      <h2>Savings</h2>
      {/* Input field for setting the savings */}
      <input type="number" value={savings} onChange={handleSavingsChange} />
      {/* Display the current savings value */}
      <p>Your savings is: {savings}</p>
    </div>
  );
};

// Export the Savings component
export default Savings;
