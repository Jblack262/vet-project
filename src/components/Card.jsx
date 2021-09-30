import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Card({pet, selectPet}) {
    const {name, species, gender, breed, age, campus} = pet;
    const ref = pet.images[0].asset._ref;
    const imgUrl = `https://cdn.sanity.io/images/ic8mtd9i/production/${ref.split('-')[1]}-${ref.split('-')[2]}.${ref.split('-')[3]}`;
    const [imgSrc, setImgSrc] = useState();
    useEffect(() => {
        fetch(imgUrl)
            .then(resp=>{
                setImgSrc(resp.url);
            })
            .catch(error=>{

            })
    }, [])
    return (
        <div className="card">
            <img src={imgSrc} alt="cool dog" />
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
