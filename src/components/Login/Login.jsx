import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField, minLengthCreator } from "../../Utilities/Validators/validators";

const minLength8 = minLengthCreator(8);
const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div><Field
              component={Input}
              name={"login"}
              placeholder={"Login"}
              validate={[requiredField, maxLength20, minLength8]}
            />
      </div>
      <div><Field
              component={Input}
              name={"password"}
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
