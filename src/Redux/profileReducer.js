const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.random()
          .toString(36)
          .substr(2, 6),
        message: state.newPostText,
        likesCount: 0
      };
      state.posts = [...state.posts, newPost];
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text = '') => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export default profileReducer;