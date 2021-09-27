import React from 'react';
import {Link} from 'react-router-dom';
import {FaInstagramSquare} from 'react-icons/fa';
import { AiFillMail , AiFillFacebook , AiFillTwitterSquare , AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

function Footer() {
    return (  
        <footer>
            <div className="row top">
                <div className="col">
                    <ul>
                        <li className="title">NORTHEAST CAMPUS</li>
                        <li><a href="/">1617 W Williams Dr
                        Phoenix, AZ 85027</a></li>
                        <li><a href="/">Savannah Schuman</a></li>
                        <li><a href="/">623.772.4222</a></li>
                    </ul>
                    <ul>
                        <li className="title">Navigation</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link tp="/about">About</Link></li>
                        <li><Link to="/adopt">Adopt</Link></li>
                    </ul>
                </div>
                <div className="col desc">
                    <h3>About Us</h3>
                    <p>The West-MEC Veterinary Sciences program has a partnership with Pinal County Animal Control to rescue animals. Students work with a veterinarian to spay, neuter, and vaccinate the animals to prepare them for adoption.</p>
                </div>
            </div>
            <div className="row">
                <div className="socials">
                    <ul>
                        <li><a href="https://www.facebook.com/westmec/"><AiFillFacebook/></a></li>
                        <li><a href="https://www.instagram.com/westmecnecvetsciences/?hl=en"><FaInstagramSquare/></a></li>
                         <li><a href="https://twitter.com/westmec?lang=en"><AiFillTwitterSquare/></a></li>
                        <li><a href="mailto:DANIELLE.EBERHART@WEST-MEC.ORG"><AiFillMail/></a></li>
                        <li><a href="https://www.linkedin.com/company/west-mec-western-maricopa-education-center"><AiFillLinkedin/></a></li>
                        <li><a href="https://www.youtube.com/user/CareerDrivenED/featured"><AiFillYoutube/></a></li>
                    </ul>
                </div>
                <p>West-Mec Pet Adoption © 2021</p>
            </div>
        </footer>
    )
}

export default Footer
