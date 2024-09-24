// Import Mongoose
const mongoose = require('mongoose');

// Define the expenses schema
const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

// Create the Expense model
const Expense = mongoose.model('Expense', expenseSchema);

// Export the Expense model
module.exports = Expense;
