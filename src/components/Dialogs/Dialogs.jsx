import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";


const Dialogs = props => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} className={s.dialogsItems}/>
  ));

  let messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));

  if (props.isAuth === false) return <Redirect to={"/login"}/>;
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage}/>
    </>
  );
};


const AddMessageForm = props => {
  return (
    <form className={s.messageBox} onSubmit={props.handleSubmit}>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message!"
          className={s.sendMessage}
        />
      <button className={s.sendBtn}>Send Message</button>
    </form>
  )
};

let AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;
