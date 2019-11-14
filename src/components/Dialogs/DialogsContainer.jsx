import React from "react";
import { updateNewMessageBodyActionCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import Provider from '../../storeContext';

const DialogsContainer = () => {
  return (
    <Provider.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage;
          const addMessage = () => {
            store.dispatch(sendMessageCreator());
            store.dispatch(updateNewMessageBodyActionCreator());
          };

          let onMessageChange = (text) => {
            store.dispatch(updateNewMessageBodyActionCreator(text));
          };
          return (
            <Dialogs
              updateNewMessageBody={onMessageChange}
              sendMessage={addMessage}
              dialogsPage={state}
            />
          );
        }
      }
    </Provider.Consumer>
  );
};

export default DialogsContainer;
