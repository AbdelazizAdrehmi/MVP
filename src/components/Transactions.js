import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      name: e.target.transactionName.value,
      amount: e.target.transactionAmount.value,
    };
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <form onSubmit={handleAddTransaction}>
        <label>Transaction Name:</label>
        <input type="text" name="transactionName" />
        <br />
        <label>Transaction Amount:</label>
        <input type="number" name="transactionAmount" />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.name}: {transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
