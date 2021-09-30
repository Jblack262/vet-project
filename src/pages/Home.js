import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner'
import Load from '../components/Load'
import { Helmet } from 'react-helmet';

function Home({data, selectPet}) {

    // const [windowWidth, setWindowWidth] = useState(undefined);
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading()
        }, 500);
      }, []);
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Veterinary  Science"/>
            {isLoading && <Load />}
            {!isLoading && <div className="cardContainer">
                {data.map((pet) => {
                    console.log(pet)
                    return (
                        <Card key={pet._id} pet={pet} selectPet={selectPet}/>
                    )
                })}
            </div>}
        </div>
    )
}

export default Home
