import React, { useContext} from 'react'

import { GlobalContext } from '../Context/GlobalState';

import { numberWithCommas } from '../utils/format';

const styles = {color: 'White'};
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4 style={styles}>Your Balance</h4>
      <h1 style={styles}>${numberWithCommas(total)}</h1>
    </>
  )
}

export default Balance
