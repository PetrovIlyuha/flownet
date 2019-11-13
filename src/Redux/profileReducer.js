const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
// TODO: state = this._state.profilePage
const profileReducer = (state,action) => {
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