'use client';

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
   
        <div className='text-center p-4 text-white' style={{ backgroundColor: '#4FA512' }}>
            © 2024 Copyright :
            <a className='text-reset fw-bold' href=''>
            Mawadah Elmashad
            </a>
        </div>
        </MDBFooter>
    );
}