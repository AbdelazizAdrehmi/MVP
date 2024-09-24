import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (e) => {
    e.preventDefault();
    const expense = {
      name: e.target.expenseName.value,
      amount: e.target.expenseAmount.value,
    };
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <form onSubmit={handleAddExpense}>
        <label>Expense Name:</label>
        <input type="text" name="expenseName" />
        <br />
        <label>Expense Amount:</label>
        <input type="number" name="expenseAmount" />
        <br />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense.name}: {expense.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
