const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  newPostText: "",
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random()
          .toString(36)
          .substr(2, 6),
        message: state.newPostText,
        likesCount: 0
      };
     return {
       ...state,
       posts: [...state.posts, newPost],
       newPostText: ''
     };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText};
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const updateNewPostTextActionCreator = (text = '') => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
};

export default profileReducer;