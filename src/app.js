import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import Budget from './components/Budget';
import Expenses from './components/Expenses';
import Income from './components/Income';
import Savings from './components/Savings';
import Transactions from './components/Transactions';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
