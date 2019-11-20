import React from "react";
import s from "./users.module.css";
import { Button } from "reactstrap";
import userPhoto from "../../assets/friend0.jpg";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.users}>
      <Pagination aria-label="Page navigation example">
        {pages.map(page => {
          return (
            <PaginationItem>
              <PaginationLink
                className={props.currentPage === page && s.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(page);
                }}
              >{page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={s.userContainer}>
              <NavLink to={"/profile/" + user.id}>
                <div className={s.avatar}>
                  <img
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    alt="user photography"
                    style={{ width: "70px", borderRadius: "50%", border: "3px solid palegreen" }}
                  />
                </div>
              </NavLink>
              <div>
                {
                  user.followed
                    ? <Button color="warning" onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "07bffeb5-174c-4589-9c34-a085d81d8aec"
                          }
                        })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(user.id);
                          }
                        });
                    }}>Unfollow</Button>
                    : <Button outline color="secondary" onClick={() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "07bffeb5-174c-4589-9c34-a085d81d8aec"
                          }
                        })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(user.id);
                          }
                        });
                    }}>Follow</Button>
                }
              </div>
              <div className={s.name}>{user.name}</div>
              <div className={s.status}>{user.status}</div>
              <div className={s.country}>{"user.location.country"}</div>
              <div className={s.city}>{"user.location.city"}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Users;

Users.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  listTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  "aria-label": PropTypes.string
};

Users.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Users.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  "aria-label": PropTypes.string
};
