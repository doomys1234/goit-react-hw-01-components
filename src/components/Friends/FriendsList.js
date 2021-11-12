import PropTypes from 'prop-types';
import s from './Friends.module.scss'
import FriendsListItem from './FriendsListItem';
export default function FriendsList({friends}) {
  return (
      <ul className={s.list}>
      {friends.map(({ id, avatar, isOnline, name }) => (
            <li key={id} className={s.item}>
            <FriendsListItem isOnline={isOnline} avatar={avatar} name={name}/>
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
