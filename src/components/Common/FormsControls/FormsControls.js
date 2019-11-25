import React from "react";
import styles from "./FormsControls.module.css";

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {props.children}
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...otherProps } = props;
  return (
      <FormControl {...props}><input {...props.input} {...otherProps}/></FormControl>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...otherProps } = props;
  return (
    <FormControl {...props}><textarea {...props.input} {...otherProps}/></FormControl>
  );
};