import React from 'react';
import InfoCard from '../components/InfoCard'
import Banner from '../components/Banner'
import '../styles/index.scss'
import { Helmet } from 'react-helmet';

function About() {
    return (
        <div>
            <Helmet>
                <title>About Page</title>
            </Helmet>
            <Banner image="https://animalcareinfo.com/wp-content/uploads/2018/04/AdobeStock_129584968-1024x388.jpeg" title="About Us" />
            <div className="cardInfo">
                <InfoCard title="About Us" content="The West-MEC Veterinary Sciences program has a partnership with Pinal County Animal Control to rescue animals. We are at the West mec northeast campus which is located at 1617 W Williams Dr Phoenix, AZ 85027. If you are interested in one of our pets, please schedule an appointment to visit with us as we are a public high school campus." />
                <InfoCard title="What We Do" content="What we do here at the West-MEC Veterinary Sciences program is have Students work with a veterinarian to spay, neuter, and vaccinate the animals to prepare them for adoption. These four-legged companions are available for adoption and looking for their forever home." />
            </div>
            <div className='photoGird'>
                <div className='divImage'><img className='imgVet' src="https://west-mec.edu/wp-content/uploads/2018/04/0005_vet-2.jpg" alt="" /></div>
                <div className='divImage'><img className='imgVet' src="https://west-mec.edu/wp-content/uploads/2018/04/0004_vet-3.jpg" alt="" /></div>
                <div className='divImage'><img className='imgVet' src="https://west-mec.edu/wp-content/uploads/2018/04/0006_vet-1.jpg" alt="" /></div>
            </div>
        </div>
    )
}

export default About
