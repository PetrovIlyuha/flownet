import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageBodyActionCreator, sendMessageCreator } from "../../Redux/dialogsReducer";

const Dialogs = props => {
  let dialogsElements = props.state.dialogsPage.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  ));

  let messagesElements = props.state.dialogsPage.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));


  const addMessage = () => {
    props.dispatch(sendMessageCreator());
    props.dispatch(updateNewMessageBodyActionCreator());
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(text));
  };
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.messageBox}>
        <textarea
          placeholder="Remember, be nice!"
          id=""
          cols="35"
          rows="3"
          onChange={onMessageChange}
          className={s.sendMessage}
          value={props.state.dialogsPage.newMessageText}
        ></textarea>
        <button
          className={s.sendBtn}
          onClick={addMessage}
        >Send Message
        </button>
      </div>
    </>
  );
};

export default Dialogs;
