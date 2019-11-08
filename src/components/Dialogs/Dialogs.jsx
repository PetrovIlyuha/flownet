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
    {id: 3, name: "Vilhelm Reich"},
    {id: 4, name: "Matt Damon"},
  ];

  let messagesData = [
    {id: 1, message: "What's new in React?"},
    {id: 2, message: "Hooks has taken over minds of developers"},
    {id: 3, message: "While I am still on lifecycle methods and REDUX"},
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsData.map(dialog => {
          return (
            <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
          )
        })}
      </div>
      <div className={s.messages}>
        {messagesData.map(message => {
          return (
            <Message message={message.message} key={message.id} id={message.id}/>
          )
        })}
      </div>
    </div>
  )
};

export default Dialogs;