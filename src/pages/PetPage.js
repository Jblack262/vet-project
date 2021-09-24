import React from 'react';
import Slideshow from '../components/Slideshow';
import {data} from '../util/data';

function PetPage() {
    return (
        <div>
            <Slideshow images={data} />
        </div>
    )
}

export default PetPage
