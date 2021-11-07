import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return ( <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
        ))}
      </tbody> 
    </table>
  );
}

TransactionHistory.prototype = {
    transactions:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }),),
}