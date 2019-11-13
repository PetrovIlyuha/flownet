const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_MESSAGE = "ADD_MESSAGE";
let initialState = {
  messages: [
    { id: 1, message: "What's new in React?" },
    { id: 2, message: "Hooks has taken over minds of developers" },
    { id: 3, message: "While I am still on lifecycle methods and REDUX" }
  ],
  dialogs: [
    { id: 1, name: "John Mitchell" },
    { id: 2, name: "Veronica Marvel" },
    { id: 3, name: "Donald Knuth" },
    { id: 4, name: "Matt Damon" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
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