import React, { Fragment, useContext } from 'react'
import Transaction from './Transaction';
import {GlobalContext} from './../context/GlobalState';
const TransactionList = () => {
      const { transactions } = useContext(GlobalContext);

      return (
            <Fragment>
                  <h3>History</h3>
                  <ul id="list" className="list">
                        {
                              transactions?.map(transaction => ( <Transaction key={transaction.id} transaction={transaction} /> ))
                        }
                  
                  </ul>
            </Fragment>
      )
}

export default TransactionList
