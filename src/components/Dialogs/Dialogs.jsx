import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  ));

  let messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));


  const addMessage = () => {
    props.sendMessage();
    props.updateNewMessageBody();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
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
          value={state.newMessageText}
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
