import React from 'react';
import InfoCard from '../components/InfoCard'
import Banner from '../components/Banner'

function About() {
    return (
        <div>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="About Us"/>
            <div className="cardContainer">
                <InfoCard title="About Us" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam unde corporis in quia aspernatur et, praesentium at quas quis iure."/>
                <InfoCard title="What We Do" content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam unde corporis in quia aspernatur et, praesentium at quas quis iure."/>
            </div>
        </div>
    )
}

export default About
