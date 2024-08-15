import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { propsPagination } from "./types";

const Pagination = <T,>({
  itemsPerPage,
  totalPages,
  data,
  onChangeData,
}: propsPagination<T>) => {
  const pageCount = Math.ceil(totalPages / itemsPerPage);

  useEffect(() => {
    onChangeData(data.slice(0, itemsPerPage));
  }, [data, onChangeData, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event.selected);
    const newOffset = event.selected * itemsPerPage;
    onChangeData(data.slice(newOffset, newOffset + itemsPerPage));
  };

  return (
    <ReactPaginate
      className="py-2 px-4 flex items-center justify-center gap-5 md:gap-8"
      activeClassName="active"
      breakLabel="..."
      nextLabel={
        <FontAwesomeIcon
          className="text-2xl font-extrabold text-primary/50 hover:text-primary/100 p-2"
          icon={faAngleRight}
        />
      }
      pageClassName="py-2 px-4 border border-solid border-primary/50 hover:border-primary/100 text-primary/50 hover:text-primary/100 rounded-lg shadow-md"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={
        <FontAwesomeIcon
          className="text-2xl font-extrabold text-primary/50 hover:text-primary/100 p-2"
          icon={faAngleLeft}
        />
      }
      renderOnZeroPageCount={null}
    />
  );
};

const MemoizedPagination = memo(Pagination) as <T>(
  props: propsPagination<T>
) => JSX.Element;

export default MemoizedPagination;
