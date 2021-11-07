import PropTypes from 'prop-types';

export default function FriendsList({friends}) {
  return (
      <ul>
          {friends.map(item => (
             <li key={item.id} class="item">
                  <span class="status" data-status={ item.isOnline}></span>
          <img
            class="avatar"
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p class="name">{item.name}</p>
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