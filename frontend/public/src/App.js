import React from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  return (
    <div style={{padding:20}}>
      <h2>Expense Tracker</h2>
      <ExpenseForm />
      <hr />
      <ExpenseList />
    </div>
  );
}

export default App;
