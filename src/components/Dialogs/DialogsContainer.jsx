import {
  updateNewMessageBodyActionCreator,
  sendMessageCreator
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
