import React from 'react'

const styles = {color: 'White'};
const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
        <div>
          <h4 style={styles}>Income</h4>
          <p  className="money plus">+$10000.00</p>
        </div>
        <div>
          <h4 style={styles}>Expense</h4>
          <p  className="money minus">-$0.00</p>
        </div>
      </div>
  )
}

export default IncomeExpenses
