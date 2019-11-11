import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = props => {
  console.log(props);
  let dialogsElements = props.state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  ));

  let messagesElements = props.state.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));

  let newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
    props.updateNewMessageText('');
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.messageBox}>
        <textarea
          id=""
          cols="35"
          rows="3"
          onChange={onMessageChange}
          className={s.sendMessage}
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
