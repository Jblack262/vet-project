import {Link} from 'react-router-dom';

function Card({pet, selectPet}) {
    const {name, species, gender, breed, age, location} = pet;
    const ref = pet.images[0].asset._ref;
    const imgUrl = `https://cdn.sanity.io/images/ic8mtd9i/production/${ref.split('-')[1]}-${ref.split('-')[2]}.${ref.split('-')[3]}`;
    return (
        <div className="card">
            <img src={imgUrl} alt="" />
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
