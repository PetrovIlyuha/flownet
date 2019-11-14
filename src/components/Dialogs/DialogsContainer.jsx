import { updateNewMessageBodyActionCreator, sendMessageCreator } from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyActionCreator(text))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
      dispatch(updateNewMessageBodyActionCreator());
    }
  }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
