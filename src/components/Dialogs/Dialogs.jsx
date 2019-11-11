import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from "./Message/Message";


let newMessageElement = React.createRef();

const sendMessage = () => {
  let text = newMessageElement.current.value;
  alert(text);
};

const Dialogs = props => {
  const dialogsData = props.state.dialogs;
  const messagesData = props.state.messages;

  let dialogsElements = dialogsData.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
  ));

  let messagesElements = messagesData.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>
  ));

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
          className={s.sendMessage}
          ref={newMessageElement}
        ></textarea>
        <button
          className={s.sendBtn}
          onClick={sendMessage}
        >Send Message</button>
      </div>
    </>
  );
};

export default Dialogs;
