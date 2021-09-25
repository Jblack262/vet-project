import React from 'react';
import {Link} from 'react-router-dom';

function Card({pet, selectPet}) {
    const {name, gender, breed, age, campus} = pet;
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={require("../images/dog.jpg").default} alt="cool dog" />
            </div>
            <div className="content">
                <h2>{name}</h2>
                <p>{gender} – {breed} – {age} - available at {campus}</p>
                <div className="btnContainer">
                    <Link onClick={() => selectPet(pet)} to="/pets">ADOPT ME</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
