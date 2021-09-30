import React from 'react';
import Slideshow from '../components/Slideshow';
import Form from '../components/Form';
import { Helmet } from 'react-helmet';

function PetPage({pet}) {
    const {name, species, gender, breed, age, campus} = pet;
    var {images} = pet;
    function imgUrl(index) {
        const ref = pet.images[index].asset._ref;
        return `https://cdn.sanity.io/images/ic8mtd9i/production/${ref.split('-')[1]}-${ref.split('-')[2]}.${ref.split('-')[3]}`;
    }
    images = images.map((image, index)=>{
        return imgUrl(index);
    })
    // console.log(images);
    return (
        <>
        <div className="petContainer">
            <Helmet>
                <title>Pet Page</title>
            </Helmet>
            <Slideshow images={images} name={name}/>
            <div className="petDescription">
                <h1 className="name">{name}</h1>
                <p className="description">Here would go a brief description of the pet, their personality maybe, details about them that are not included in the list below.</p>
                <ul className="list">
                    <li>{species}</li>
                    <li>{gender}</li>
                    <li>{breed}</li>
                    <li>{age}</li>
                    <li>{campus}</li>
                </ul>
            </div>
        </div>
        <Form/>
        </>
    )
}

export default PetPage
