import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "../styles/UserList.module.css";

function UserList({ userList }) {
  return (
    <div className={styles.userListContainer}>
      {userList.map((user, ind) => {
        return <UserItem key={ind} name={user} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userList: state.userList,
});

export default connect(mapStateToProps)(UserList);
