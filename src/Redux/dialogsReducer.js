const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_MESSAGE = "ADD_MESSAGE";

const dialogsReducer = (state,action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: Math.random()
          .toString(36)
          .substr(2, 6),
        message: state.newMessageBody
      };
      state.messages = [...state.messages, newMessage];
      state.newMessageBody = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newText;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageBodyActionCreator = (text = '') => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newText: text
  }
};

export default dialogsReducer;