const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
