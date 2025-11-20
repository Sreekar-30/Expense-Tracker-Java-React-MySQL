import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ExpenseList() {
  const [items, setItems] = useState([]);
  useEffect(() => { fetchAll(); }, []);
  const fetchAll = async () => {
    const res = await axios.get('/api/expenses');
    setItems(res.data || []);
  };
  const del = async (id) => { await axios.delete('/api/expenses/'+id); fetchAll(); };
  return (
    <div>
      <h3>Expenses</h3>
      <table border="1" cellPadding="8">
        <thead><tr><th>ID</th><th>Title</th><th>Amount</th><th>Category</th><th>Date</th><th>Action</th></tr></thead>
        <tbody>{items.map(i => (
          <tr key={i.id}><td>{i.id}</td><td>{i.title}</td><td>{i.amount}</td><td>{i.category}</td><td>{i.date}</td>
          <td><button onClick={()=>del(i.id)}>Delete</button></td></tr>
        ))}</tbody>
      </table>
    </div>
  );
}
