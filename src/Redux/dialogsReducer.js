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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:{
      return {
        ...state,
        messages: [...state.messages, { id: Math.random()
            .toString(36)
            .substr(2, 6), message: action.newMessageBody }]
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;