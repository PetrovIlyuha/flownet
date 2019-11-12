import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.state.messagesPage.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  ));

  let messagesElements = props.state.messagesPage.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch({type: 'ADD_MESSAGE'});
    props.dispatch({type: 'UPDATE_NEW_MESSAGE_TEXT', newText: ''});
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type: "UPDATE_NEW_MESSAGE_TEXT", newText: text});
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
          value={props.state.messagesPage.newMessageText}
          ref={newMessageElement}
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
