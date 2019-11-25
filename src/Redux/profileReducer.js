import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  profile: "",
  status: ""
};

//Reducer
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Math.random()
          .toString(36)
          .substr(2, 6),
        message: action.newPostText,
        likesCount: 0
      };
     return {
       ...state,
       posts: [...state.posts, newPost]
     };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
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

// Action Creators
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


//thunks
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId)
    .then(data => dispatch(setUserProfile(data)));
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    });
};

export default profileReducer;