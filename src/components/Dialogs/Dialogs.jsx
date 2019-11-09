import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import Message from './Message/Message';


const Dialogs = props => {
 const  dialogsData  = props.dialogs;
 const messagesData = props.messages;


  let dialogsElements = dialogsData.map(dialog => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = messagesData.map(message => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
