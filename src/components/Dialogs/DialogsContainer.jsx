import React from "react";
import { updateNewMessageBodyActionCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = props => {
  let state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(sendMessageCreator());
    props.store.dispatch(updateNewMessageBodyActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(text));
  };
  return <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={addMessage}
            dialogsPage={state}
        />
};

export default DialogsContainer;
