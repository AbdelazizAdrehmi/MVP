// Import Express and React
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import Budget from './components/Budget';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Savings from './components/Savings';
import Transactions from './components/Transactions';

// Create an Express app
const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send the index.html file
  res.sendFile(__dirname + '/public/index.html');
});

// Render the React components to the root element
const root = ReactDOM.render(
  <React.StrictMode>
    <Budget />
    <Expenses />
    <Income />
    <Savings />
    <Transactions />
  </React.StrictMode>,
  document.getElementById('root')
);

// Start the Express server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
