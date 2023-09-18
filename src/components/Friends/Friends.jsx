import css from './Friends.module.css';

export const FriendsList = ({ children, className = '' }) => {
  return <ul className={`${css.friendsList}`}>{children}</ul>;
};

export const Friends = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : ''}`}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
