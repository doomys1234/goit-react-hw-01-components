import PropTypes from 'prop-types';
import s from './Friends.module.scss'
export default function FriendsList({friends}) {
  return (
      <ul className={s.list}>
          {friends.map(item => (
             <li key={item.id} className={s.item}>
     
              <span className={s.span} data-status={item.isOnline} style={{backgroundColor: checkingStatus(item.isOnline)}}></span>
          <img
            className={s.image}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={s.text}>{item.name}</p>
        </li>
          ))}
    </ul>
  );
}

FriendsList.prototype = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }),),
}

function checkingStatus(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}