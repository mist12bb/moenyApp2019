import React from 'react';

const Table = ({actions}) => {
  
  const rows= () => {return actions.map((action,  i)=> {
    return <tr key={i}>
  <th>{action.type}</th>
  <th>{action.amount}</th>
  <th>{action.info}</th>

  <th>{action.date.toLocaleDateString()}</th>
  </tr>})}
  return (
    <div>
      <table >
      <thead>
      <tr>
        <th>Id</th>
        <th>Amount</th>
        <th>Info</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    {rows()}
    </tbody>
      </table>
    </div>
  );
};

export default Table;