import {
  sendMessageCreator
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from 'redux';
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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    }
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
