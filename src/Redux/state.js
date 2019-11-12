let rerenderEntireTree = () => {
  console.log("State was changed");
};

let state = {
  messagesPage: {
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
    newMessageText: '',
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
    newPostText: ''
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
};

export let addPost = () => {
  let newPost = {
    id: Math.random()
      .toString(36)
      .substr(2, 6),
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: Math.random()
      .toString(36)
      .substr(2, 6),
    message: state.messagesPage.newMessageText
  };
  state.messagesPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;