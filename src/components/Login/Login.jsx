import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div><Field component="input" name={"login"} placeholder={"Login"}/></div>
      <div><Field component="input" name={"password"} placeholder={"Password"}/></div>
      <div><Field type="checkbox" name={"rememberMe"} component="input"/>Remember Me</div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};


export default Login;
