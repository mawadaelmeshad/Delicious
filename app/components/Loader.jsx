'use client';

import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

function Loader() {
    return (
        <div className='d-flex justify-content-center mt-64 mb-80'>
            <MDBSpinner role='status' color='success'>
            <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
        
    );
}
export default Loader;