import React from "react";
import s from "../Paginator/Paginator.module.css";

const Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.users}>
        {pages.map(page => {
          return (
            <div className={s.pages}>
              <span
                className={currentPage === page && s.selectedPage}
                onClick={(e) => {
                  onPageChanged(page);
                }}
              >{page}
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default Paginator;

