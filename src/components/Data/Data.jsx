import css from './Data.module.css';

export const Section = ({ children, className = '' }) => {
  return <section className={`${css.statistics}`}>{children}</section>;
};

export const DataHead = ({ children, className = '' }) => {
  return <h2 className={`${css.title}`}>{children}</h2>;
};

export const DataList = ({ children, className = '' }) => {
  return <ul className={`${css.statList}`}>{children}</ul>;
};

export const Data = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};
