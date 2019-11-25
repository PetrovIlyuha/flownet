import React from "react";
import s from "../Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../Utilities/Validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = props => {
  return (
    <form className={s.messageBox} onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          validate={[requiredField, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message!"
          className={s.sendMessage}
        />
      </div>
      <button className={s.sendBtn}>Send Message</button>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);