/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let postData = [
    {
      id:1,
      message: 'How is progress in Front-End self-education?',
      likesCount: 14
    },
    {
      id:2,
      message: 'It\'s moving under my skin...',
      likesCount: 11
    },
    {
      id:3,
      message: 'Doesn\'t it scares you?',
      likesCount: 122
    },
    {
      id:4,
      message: 'Not really it\'s a tradeoff',
      likesCount: 3
    }
  ];

  return (
    <div className={s.postsBlock}>
      <h3>
        My Posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {
          postData.map(post => {
            return (
              <Post key={post.id} message={post.message} likesCount={post.likesCount}/>
            )
          })
        }
      </div>
    </div>
  );
};

export default MyPosts;
