import React from 'react';
import Slideshow from '../components/Slideshow';
import Form from '../components/Form';
import { Helmet } from 'react-helmet';

function PetPage({pet}) {
    const {name, species, gender, breed, age, location} = pet;
    var {images} = pet;
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
                    <li>{age} months old</li>
                    <li>{location}</li>
                </ul>
            </div>
        </div>
        <Form/>
        </>
    )
}

export default PetPage
