const mongoose = require('mongoose');

const savingsSchema = new mongoose.Schema({
  amount: Number,
});

const Savings = mongoose.model('Savings', savingsSchema);

module.exports = Savings;
