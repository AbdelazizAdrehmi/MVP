// Import Mongoose
const mongoose = require('mongoose');

// Define the savings schema
const savingsSchema = new mongoose.Schema({
  amount: Number,
});

// Create the Savings model
const Savings = mongoose.model('Savings', savingsSchema);

// Export the Savings model
module.exports = Savings;
