import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, children, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, name, ...otherProps } = props;
  return (
    <FormControl {...props}>
      <input {...props.input} {...otherProps} className={styles.inputField}/>
      <label htmlFor={name}>{props.name}</label>
    </FormControl>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...otherProps } = props;
  return (
    <FormControl {...props}><textarea {...props.input} {...otherProps}/></FormControl>
  );
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />{text}
    </div>
  );
};