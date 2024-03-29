import React from "react";

import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <div className={styles.inputContainer}>
      {props.label ? <label className={styles.label}> {props.label} </label> : null } 
      <input
        className={"form-control form-control-sm"}
        type={props.type}
        name={props.name}
        onChange={props.changed}
        value={props.value}
      />
    </div>
  );
}


