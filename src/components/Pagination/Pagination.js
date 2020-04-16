import React from 'react';
import styled from 'styled-components';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pagination = ({ pages, nextPage, current_page, scrollTo }) => {
  console.log(pages, current_page);
  return (
   <div className="container my-3 mx-auto">
    <div className="row d-flex justify-content-between">
    <div className="d-flex justify-content-start align-item">
      { current_page > 1 ?
        <button
          className="btn btn-outline-pages"
          onClick={()=> {nextPage(current_page - 1); scrollTo()} }>
          <FontAwesomeIcon className="fontAwesome mr-2" icon={faArrowLeft}/>Page { current_page - 1 }
        </button>
        : null
      }
    </div>
    <div className="d-flex justify-content-end align-item">
      { current_page < pages + 1 ?
         <button className="btn btn-outline-pages"
         onClick={()=> {nextPage(current_page + 1); scrollTo()} }>
         Page { current_page + 1 } <FontAwesomeIcon className="fontAwesome ml-2" icon={faArrowRight}/>
         </button>
         : null
        }
    </div>
    </div>
   </div>

  );
}
export default Pagination;
/*
*/
