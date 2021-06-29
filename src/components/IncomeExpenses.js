import React, { Fragment, useContext } from 'react'
import { GlobalContext } from './../context/GlobalState';
const IncomeExpenses = () => {
      const { transactions } = useContext(GlobalContext);
      const amounts = transactions.map(transaction => transaction.amount);
      const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);

      const expense = ( amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1 ).toFixed(2);

      return (
            <Fragment>
                  <div class="inc-exp-container">
                  <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">+NGN{income}</p>
                  </div>
                  <div>
                  <h4>Expense</h4>
                        <p id="money-minus" className="money minus">-NGN{expense}</p>
                  </div>
                  </div>
            </Fragment>
      )
}

export default IncomeExpenses
