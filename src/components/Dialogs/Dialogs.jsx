import React from 'react';
import s from './Dialogs.module.css';
import { NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
};

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: "John Mitchell"},
    {id: 2, name: "Veronica Marvel"},
    {id: 3, name: "Donald Knuth"},
    {id: 4, name: "Matt Damon"},
  ];

  let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);

  let messagesData = [
    {id: 1, message: "What's new in React?"},
    {id: 2, message: "Hooks has taken over minds of developers"},
    {id: 3, message: "While I am still on lifecycle methods and REDUX"},
  ];

  let messagesElements = messagesData
        .map(message => <Message message={message.message} key={message.id} id={message.id}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
};

export default Dialogs;