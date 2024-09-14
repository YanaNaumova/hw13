import styles from "../styles/UserItem.module.css";

function UserItem({ name }) {
  return <div className={styles.userItemContainer}>{name}</div>;
}

export default UserItem;
