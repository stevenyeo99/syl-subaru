'use client';

import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";

import './Pagination.css';

const Pagination = (props) => {

    const {data, isDisplay} = props;

    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 5;
    const offset = currentPage * PER_PAGE;
    const currentPageData = data.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(data.length / PER_PAGE);

    const handlePageClick = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
    }

    return (
        <Fragment>
            {
                currentPageData
            }

            {
                isDisplay && (
                    <ReactPaginate
                        breakLabel={'...'}
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        subContainerClassName={'pages pagination'}
                        activeClassName={"active"}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                    />
                )
            }
            
        </Fragment>
    );
};

export default Pagination;