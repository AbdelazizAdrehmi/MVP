// Import React and useState hook
import React, { useState } from 'react';

// Define the Expenses component
const Expenses = () => {

  // Initialize the expenses state with an empty array
  const [expenses, setExpenses] = useState([]);

 // Define a function to handle adding new expenses
  const handleAddExpense = (e) => {
 // Prevent the default form submission behavior
    e.preventDefault();

 // Create a new expense object with the input values
    const expense = {
      name: e.target.expenseName.value,
      amount: e.target.expenseAmount.value,
    };

// Add the new expense to the expenses state
    setExpenses([...expenses, expense]);
  };
// Render the Expenses component
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
// Export the Expenses component
export default Expenses;
