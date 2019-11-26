import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField, minLengthCreator } from "../../Utilities/Validators/validators";
import { connect } from "react-redux";
import { login } from "../../Redux/authReducer";
import { Redirect } from "react-router-dom";

const minLength8 = minLengthCreator(8);
const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div><Field
              component={Input}
              name={"email"}
              placeholder={"Email"}
              validate={[requiredField, maxLength20, minLength8]}
            />
      </div>
      <div><Field
              component={Input}
              name={"password"}
              type={"password"}
              placeholder={"Password"}
              validate={[requiredField, minLength8]}
          />
      </div>
      <div><Field type={"checkbox"} name={"rememberMe"} component="input"/>Remember Me</div>
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
    return <Redirect to={"/profile"}/>
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login })(Login);
