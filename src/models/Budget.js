const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  amount: Number,
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
