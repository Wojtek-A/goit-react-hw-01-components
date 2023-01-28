import propTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={friend.isOnline ? css.statusYes : css.statusNo}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isOnline: propTypes.bool,
      name: propTypes.string,
      avatar: propTypes.string,
    })
  ).isRequired,
};
