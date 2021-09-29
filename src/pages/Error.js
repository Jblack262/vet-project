import React from 'react'
import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div className='divError'>
            <Helmet>
                <title>Error</title>
            </Helmet>
            <h1 className='Error'>404 Error</h1>
        </div>
    )
}

export default Error