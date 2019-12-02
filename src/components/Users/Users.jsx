import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({
                 currentPage,
                 totalUsersCount,
                 pageSize,
                 onPageChanged,
                 users,
                 followingInProgress,
                 follow,
                 unfollow,
                 ...props }) => {
  return (
    <>
      <Paginator
        currentPage={currentPage}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      />
      {
        users.map(user => {
          return <User
            key={user.id}
            userId={user.id}
            users={users}
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />;

        })
      }
    </>
  );
};

export default Users;
