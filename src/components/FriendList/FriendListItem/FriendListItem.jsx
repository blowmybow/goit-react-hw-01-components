import PropTypes from 'prop-types';
import {
  FriendImg,
  FriendItem,
  FriendName,
  FriendStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <FriendItem>
      <FriendStatus>{status}</FriendStatus>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
