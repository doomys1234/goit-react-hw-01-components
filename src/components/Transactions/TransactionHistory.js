import PropTypes from 'prop-types';
import s from './Transactions.module.scss'
export default function TransactionHistory({ transactions }) {
  return ( <table className={s.table}>
      <thead className={s.head}>
        <tr className={s.row}>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
      {transactions.map(({id,type,amount,currency}) => (
        <tr key={id}>
          <td className={s.item}>{type}</td>
          <td className={s.item}>{amount}</td>
          <td className={s.item}>{currency}</td>
        </tr>
        ))}
      </tbody> 
    </table>
  );
}

TransactionHistory.prototype = {
    transactions:PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency:PropTypes.string,
    }),),
}