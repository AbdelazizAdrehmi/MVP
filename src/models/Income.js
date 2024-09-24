// Import Mongoose
const mongoose = require('mongoose');

// Define the income schema
const incomeSchema = new mongoose.Schema({
  amount: Number,
});

// Create the Income model
const Income = mongoose.model('Income', incomeSchema);

// Export the Income model
module.exports = Income;
