import React, { useState } from "react";
import s from "../Paginator/Paginator.module.css";

const Paginator = ({
                     currentPage,
                     totalUsersCount,
                     pageSize,
                     onPageChanged, portionSize = 10, ...props}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount/portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={s.users}>{
      portionNumber > 1
      && <button
          onClick={() => setPortionNumber(portionNumber - 1)}
          className={s.changeBtn}
         > &lt; &lt; </button>
     }
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(page => {
          return (
            <div className={s.pages}>
              <button
                className={currentPage === page ? s.selectedPage : ""}
                onClick={(e) => {
                  onPageChanged(page);
                }}
              >{page}
              </button>
            </div>
          );
        })}
      {
        portionCount > portionNumber
          && <button
              onClick={() => setPortionNumber(portionNumber + 1)}
              className={s.changeBtn}
             > &gt; &gt; </button>
      }
    </div>
  );
};

export default Paginator;

