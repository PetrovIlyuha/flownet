import React from "react";
import s from "./users.module.css";
import { Button } from "reactstrap";
import * as axios from "axios";
import userPhoto from "../../assets/friend0.jpg";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                  className={this.props.currentPage === page && s.selectedPage}
                  onClick={(e) => { this.onPageChanged(page)}}
                >{page}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          </Pagination>
        {
          this.props.users.map(user => {
            return (
              <div key={user.id} className={s.userContainer}>
                <div className={s.avatar}>
                  <img
                    src={user.photos.small !== null ? user.photos.small : userPhoto}
                    alt="user photography"
                    style={{ width: "70px", borderRadius: "50%", border: "3px solid palegreen" }}
                  />
                </div>
                <div>
                  {
                    user.followed
                      ? <Button outline color="secondary" onClick={() => {
                        this.props.unfollow(user.id);
                      }}>Unfollow</Button>
                      : <Button outline color="secondary" onClick={() => {
                        this.props.follow(user.id);
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
  }

}


export default Users;