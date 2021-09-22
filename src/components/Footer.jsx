import React from 'react';
import {FaFacebookSquare,FaInstagramSquare, FaTwitterSquare, FaSnapchatSquare} from 'react-icons/fa';

function Footer() {
    return (  
        <footer>
            <div className="row top">
                <div className="col">
                    <ul>
                        <li className="title">Services</li>
                        <li><a href="/">Web Design</a></li>
                        <li><a href="/">Hosting</a></li>
                        <li><a href="/">Development</a></li>
                    </ul>
                    <ul>
                        <li className="title">About</li>
                        <li><a href="/">Company</a></li>
                        <li><a href="/">Team</a></li>
                        <li><a href="/">Jobs</a></li>
                    </ul>
                </div>
                <div className="col desc">
                    <h3>Title</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, est nulla porro voluptates maiores inventore qui odio sunt dolorum illo.</p>
                </div>
            </div>
            <div className="row">
                <div className="socials">
                    <ul>
                        <li><a href="/"><FaFacebookSquare/></a></li>
                        <li><a href="/"><FaInstagramSquare/></a></li>
                        <li><a href="/"><FaTwitterSquare/></a></li>
                        <li><a href="/"><FaSnapchatSquare/></a></li>
                    </ul>
                </div>
                <p>Company Name © 2021</p>
            </div>
        </footer>
    )
}

export default Footer
