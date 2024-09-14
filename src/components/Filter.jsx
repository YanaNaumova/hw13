import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { useState } from "react";
import styles from "../styles/Filter.module.css";

function Filter({ setFilter }) {
  const [inputText, setInputText] = useState("");

  function handleInput(e) {
    const newValue = e.target.value;
    setInputText(newValue);
    setFilter(newValue);
  }
  return (
    <div className={styles.filterContainer}>
      <input
        className={styles.inputText}
        type="text"
        onChange={handleInput}
        value={inputText}
        placeholder="Enter name"
      />
    </div>
  );
}

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
