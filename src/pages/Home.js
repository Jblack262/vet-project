import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner'
import Load from '../components/Load'

function Home({data, selectPet}) {
    // const [windowWidth, setWindowWidth] = useState(undefined);
    const [isLoading,setIsLoading] = useState(true)
    const [columns, setColumns] = useState(1);
    useEffect(()=>{
    setTimeout(() => {
        setIsLoading()
    }, 2000);
    },[])
    useEffect(() => {
        function handleResize() {
            // setWindowWidth(window.innerWidth);
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
        // getColumnsNumber();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      useEffect(()=>{
    setTimeout(() => {
        setIsLoading()
    }, 2000);
    },[])
    if (isLoading) {
    return (
       <Load/>
    );
    }
    return (
        <div>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="Veterinary  Science"/>
            <h1>{columns}</h1>
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
