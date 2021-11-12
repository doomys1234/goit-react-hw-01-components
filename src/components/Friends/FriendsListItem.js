import PropTypes from 'prop-types';
import s from './Friends.module.scss'
export default function FriendsListItem({id, avatar,isOnline, name}) {
    return <>
     
              <span className={s.span} data-status={isOnline} style={{backgroundColor: checkingStatus(isOnline)}}></span>
          <img
            className={s.image}
            src={avatar}
            alt={name}
            width="48"
          />
          <p className={s.text}>{name}</p>
        </>
}

function checkingStatus(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
   name: PropTypes.string,
  isOnline: PropTypes.bool, 
}