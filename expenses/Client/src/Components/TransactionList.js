import React, { useContext } from 'react'
import  Transaction  from "./Transaction"

import { GlobalContext } from '../Context/GlobalState';

const styles = {color: 'White'};
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);


  return (
    <>
      <h3 style={styles}>History</h3>
      <ul className="list">
        {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList
