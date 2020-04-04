import React from 'react';
import ButtonPagination from '../ButtonPagination/ButtonPagination';
import { FaArrowRight, FaArrowLeft  } from 'react-icons/fa';
const Pagination = ({ pages, nextPage, current, scrollTo }) => {

  return (
   <div className="container my-3 mx-auto">
      <ButtonPagination
        handleClick={nextPage}
        scrollTo={scrollTo}
        current={current}
        pages={pages}
        content="Page"
        leftIcon={<FaArrowLeft />}
        rightIcon={<FaArrowRight />}
        className={'paginationBtn'}
      />
 </div>
  );
}
export default Pagination;
