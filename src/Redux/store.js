import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      posts: [
        {
          id: 1,
          message: "How is progress in Front-End self-education?",
          likesCount: 14
        },
        {
          id: 2,
          message: "It's moving under my skin...",
          likesCount: 11
        },
        {
          id: 3,
          message: "Doesn't it scares you?",
          likesCount: 122
        },
        {
          id: 4,
          message: "Not really it's a tradeoff",
          likesCount: 3
        }
      ],
      newPostText: ""
    },
    sidebar: {
      friends: [
        {
          friendId: 0,
          name: "Andy Sterkowitz"
        },
        {
          friendId: 1,
          name: "Ashley Bee"
        },
        {
          friendId: 2,
          name: "Florence Marriott"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("State was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;