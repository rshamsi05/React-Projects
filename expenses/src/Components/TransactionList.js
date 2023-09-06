import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

const styles = {color: 'White'};
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);


  return (
    <>
      <h3 style={styles}>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<li style={styles} className="minus">
          {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>))}
      </ul>
    </>
  )
}

export default TransactionList
