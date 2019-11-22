import {
  updateNewMessageBodyActionCreator,
  sendMessageCreator
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
  };
};

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: text => {
      dispatch(updateNewMessageBodyActionCreator(text));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
