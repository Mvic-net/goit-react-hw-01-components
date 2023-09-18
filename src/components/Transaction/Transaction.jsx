import css from './Transaction.module.css';

export const Transaction = ({ children, className = '' }) => {
  return <table className={`${css.transactionHistory}`}>{children}</table>;
};
export const TransactionHead = () => {
  return (
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};

export const TransactionBody = ({ children, className = '' }) => {
  return <tbody className={`${css.transactionBody}`}>{children}</tbody>;
};

export const TransactionTable = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
