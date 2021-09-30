import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home({pets, selectPet}) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Veterinary  Science"/>

            <div className="cardContainer">
                {pets.map((pet) => {
                    return (
                        <Card key={pet._id} pet={pet} selectPet={selectPet}/>
                    )
                })}
            </div>
        </HelmetProvider>
    )
}

export default Home
