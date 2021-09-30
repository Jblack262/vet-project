import React from 'react';
import {Link} from 'react-router-dom';

function Card({pet, selectPet}) {
    const {name, species, gender, breed, age, location} = pet;
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={require("../images/dog.jpg").default} alt="cool dog" />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{gender} - {species} - {breed} - {age} months old - available at {location}</p>
                <div className="btnContainer">
                    <Link onClick={() => selectPet(pet)} to="/pets">ADOPT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
