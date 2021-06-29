import React, { Fragment, useContext } from 'react';
import { GlobalContext } from './../context/GlobalState';
const Transaction = ({ transaction:{ id, text, amount } }) => {
      const {deleteTransaction} = useContext(GlobalContext);
      const sign = amount < 0 ? '-' : '+';
      const borderStyle = amount < 0 ? 'minus' : 'plus';
      return (
            <Fragment>
                  <li className={borderStyle}>
                        {text} <span>{sign}NGN {Math.abs(amount)}</span><button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
                  </li>
            </Fragment>
      )
}

export default Transaction
