import React from 'react';
import {Link} from 'react-router-dom';

function Card() {
    return (
        <div className="card">
            <div className="imgContainer">
                <img src={require("../images/dog.jpg").default} alt="cool dog" />
            </div>
            <div className="content">
                <h2>Pet Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptates perferendis qui accusamus nostrum nobis, voluptatem sunt dolore repellendus rerum unde quae asperiores fugit quaerat! Dignissimos laborum placeat laudantium soluta!</p>
            </div>
            <div className="btnContainer">
                <Link to="/pets"><button>ADOPT ME</button></Link>
            </div>
        </div>
    )
}

export default Card
