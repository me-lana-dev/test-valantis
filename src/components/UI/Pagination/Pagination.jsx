import React from "react";
import classes from "./Pagination.module.css";

const Pagination = ({ limit, page = 1, changePage2 }) => {
  const prev = () => {
    const prevPage = page - 1;
    const prevOffset = prevPage === 1 ? 0 : (prevPage - 1) * limit + 1;
    changePage2(prevPage, prevOffset);
  };

  const next = () => {
    const nextPage = page + 1;
    const nextOffset = nextPage === 1 ? 0 : (nextPage - 1) * limit + 1;
    changePage2(nextPage, nextOffset);
  };

  return (
    <>
      <div className={classes.pagination}>
        {page > 1 && (
          <span className={classes.paginationItem} onClick={prev}>
            Назад
          </span>
        )}
        <span className={classes.paginationItem + " " + classes.active}>
          {page}
        </span>
        <span className={classes.paginationItem} onClick={next}>
          Вперед
        </span>
      </div>
    </>
  );
};

export default Pagination;
