// Import React and useState hook
import React, { useState } from 'react';

// Define the Transactions component
const Transactions = () => {
  // Initialize the transactions state with an empty array
  const [transactions, setTransactions] = useState([]);

 // Define a function to handle adding new transactions
  const handleAddTransaction = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Create a new transaction object with the input values
    const transaction = {
      name: e.target.transactionName.value,
      amount: e.target.transactionAmount.value,
    };
    // Add the new transaction to the transactions state
    setTransactions([...transactions, transaction]);
  };

  // Render the Transactions component
  return (
    <div>
      <h2>Transactions</h2>
      {/* Form for adding new transactions */}
      <form onSubmit={handleAddTransaction}>
        <label>Transaction Name:</label>
        <input type="text" name="transactionName" />
        <br />
        <label>Transaction Amount:</label>
        <input type="number" name="transactionAmount" />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
      {/* List of existing transactions */}
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.name}: {transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the Transactions component
export default Transactions;
