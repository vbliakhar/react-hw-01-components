import "./FriendList.scss";
const FriendList = (props) => {
  return (
    <ul className="friend-list">
      {props.friends.map((friend) => (
        <li className="item" key={friend.id}>
          <span
            className="status"
            style={
              friend.isOnline ? { background: "green" } : { background: "red" }
            }
          ></span>
          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default FriendList;
