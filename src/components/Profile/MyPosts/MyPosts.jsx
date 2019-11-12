/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements  = props.posts.map(post => {
    return (
      <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
    )
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({type: "ADD_POST"});
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: ''});
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", newText: text});
  };

  return (
    <div className={s.postsBlock}>
      <h3>
        My Posts
      </h3>
      <div>
        <div>
          <textarea
            className={s.sendPost}
            placeholder="Remember, be nice!"
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={s.addPostBtn} onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
