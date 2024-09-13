'use client';
import React, { useState } from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function Pagination({ itemsPerPage, currentPage, totalItems, setCurrentPage }) {
    const pageNumbers = [...Array(Math.ceil(totalItems / itemsPerPage)).keys()];

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex + 1); 
    };

    return (
        <nav className='flex justify-center font-bold my-2'>
            <MDBPagination className='mb-0 cursor-pointer'>
                <MDBPaginationItem
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 2)}
                >
                    <MDBPaginationLink previous />
                </MDBPaginationItem>
                {pageNumbers.map((number) => (
                    <MDBPaginationItem
                        key={number}
                        active={currentPage === number + 1}
                        onClick={() => handlePageChange(number)}
                    >
                        <MDBPaginationLink>{number + 1}</MDBPaginationLink>
                    </MDBPaginationItem>
                ))}
                <MDBPaginationItem
                    disabled={currentPage === pageNumbers.length}
                    onClick={() => handlePageChange(currentPage)}
                >
                    <MDBPaginationLink next />
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}

export default Pagination;
