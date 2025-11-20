import React, { useState } from 'react';
import axios from 'axios';
export default function ExpenseForm(){
  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');
  const [category,setCategory]=useState('');
  const [date,setDate]=useState('');
  const submit = async (e)=>{e.preventDefault(); await axios.post('/api/expenses', {title, amount: parseFloat(amount), category, date}); window.location.reload();};
  return (
    <form onSubmit={submit} style={{marginBottom:10}}>
      <input required placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)} /> &nbsp;
      <input required placeholder='Amount' type='number' value={amount} onChange={e=>setAmount(e.target.value)} /> &nbsp;
      <input placeholder='Category' value={category} onChange={e=>setCategory(e.target.value)} /> &nbsp;
      <input type='date' value={date} onChange={e=>setDate(e.target.value)} /> &nbsp;
      <button type='submit'>Add</button>
    </form>
  );
}
