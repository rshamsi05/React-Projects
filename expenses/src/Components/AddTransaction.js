import React, {useState} from 'react'

const styles = {color: 'White'};
const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  return (
    <>
      <h3 style={styles}>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label style={styles} htmlFor="text">Text</label>
          <input style={styles} type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label style={styles} htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input style={styles} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
