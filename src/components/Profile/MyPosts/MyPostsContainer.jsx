import { addPostActionCreator } from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost))
    }
  }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
