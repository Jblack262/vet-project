import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner'

function Home({data, selectPet}) {
    const [columns, setColumns] = useState(1); //keeps track of number of columns to make empty divs to make grid look pretty

    useEffect(() => {
        function handleResize() { //set columns based on screen width
            if (window.innerWidth >= 1200) {
                setColumns(3);
            } else if (window.innerWidth < 800) {
                setColumns(1)
            } else {
                setColumns(2)
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return (
        <div>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Veterinary  Science"/>
            <div className="cardContainer">
                {data.map((pet) => {
                    return (
                        <Card key={pet.id} pet={pet} selectPet={selectPet}/>
                        // if () {
                        //     console.log('yay')
                        // }
                    )
                    // {data.length % columns === 0 && <h1>Hello World</h1>}
                })}
                {
                    [...Array(columns - (data.length % columns))].map((element, index) => { //gets the remainder of cards that should be left to make the flexbox follow a grid pattern
                        if (data.length % columns !== 0) {
                            return (
                                <div key={index} className="card empty" />
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Home
