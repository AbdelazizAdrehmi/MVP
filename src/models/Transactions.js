// Import Mongoose
const mongoose = require('mongoose');

// Define the transactions schema
const transactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
});

// Create the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Export the Transaction model
module.exports = Transaction;
