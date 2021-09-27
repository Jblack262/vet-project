import React from 'react';
import Form from '../components/Form';
import Banner from '../components/Banner';

function Adopt() {
    return (
        <>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Adopt a Pet"/>
            <div className='adopt'>
                <Form/>
            </div>
        </>
    )
}

export default Adopt
