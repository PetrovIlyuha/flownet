/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../Utilities/Validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
        <Field
          name="newPostText"
          component={TextArea}
          placeholder="Add Message Here..."
          validate={[requiredField, maxLength10]}/>
        <div>
          <button className={s.addPostBtn} type="submit">Add Post</button>
        </div>
    </form>
  )
};

let AddPostReduxForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo((props) => {
  const { posts } = props;
  const postsElements = posts.map(post => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    );
  });

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3 className={s.postsHeader}>
        My Posts
      </h3>
      <AddPostReduxForm onSubmit={addNewPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});

export default MyPosts;
