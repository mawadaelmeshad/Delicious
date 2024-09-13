'use client';
import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

function Pagination() {
    return (
            <nav className='flex justify-center font-bold my-2'>
            <MDBPagination className='mb-0'>
                <MDBPaginationItem>
                <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                <MDBPaginationLink href='#'>1</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                <MDBPaginationLink href='#'>2</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                <MDBPaginationLink href='#'>3</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
            </nav>
    );
}
export default Pagination;