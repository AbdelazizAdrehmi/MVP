// Import Mongoose
const mongoose = require('mongoose');

// Define the budget schema
const budgetSchema = new mongoose.Schema({
  amount: Number,
});

// Create the Budget model
const Budget = mongoose.model('Budget', budgetSchema);

// Export the Budget model
module.exports = Budget;
