import React from 'react'

const styles = {color: 'White'};
const TransactionList = () => {
  return (
    <>
      <h3 style={styles}>History</h3>
      <ul className="list">
        <li style={styles} className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList
