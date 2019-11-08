import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export default function Content() {
  return (
    <div>
      <div>
        <ProfileInfo/>
        <MyPosts />
      </div>
    </div>
  );
}
