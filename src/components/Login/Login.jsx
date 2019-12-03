import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField, minLengthCreator } from "../../Utilities/Validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router-dom";
import style from '../Common/FormsControls/FormsControls.module.css';

const minLength8 = minLengthCreator(8);
const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
  const { handleSubmit, error } = props;
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [requiredField, maxLength20, minLength8],Input)}
      {createField("Password", "password", [requiredField, minLength8],Input, {type: "password"})}
      {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile/1234"}/>
  }
  return (
    <div className={style.loginForm}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
