import PropTypes from 'prop-types';
 import s from './User.module.scss'



export default function UserMarkup({ imageUrl, name, tag, location, stats }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={imageUrl} alt="Аватар пользователя" className={s.image} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.tag}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserMarkup.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
