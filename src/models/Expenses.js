const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
