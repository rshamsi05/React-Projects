import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const styles = {color: 'White'};
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'} style={styles}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick ={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
    </li>
  )
}

export default Transaction
