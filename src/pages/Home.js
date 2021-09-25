import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner'

function Home({data, selectPet}) {
    return (
        <div>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Veterinary  Science"/>
            <div className="cardContainer">
                {data.map((pet) => {
                    return (
                        <Card key={pet.id} pet={pet} selectPet={selectPet}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
