import React from 'react';
import {Link} from 'react-router-dom';
import {GrMenu, GrClose} from 'react-icons/gr'

function Navbar(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <ul className="navBar">
            <div>
                <li>West-MEC Veterinary Science</li>
                {open ? <GrClose onClick={() => setOpen(!open)}/> : <GrMenu onClick={() => setOpen(!open)}/>}
                
            </div>
            <div className={"btnContainer" + (!open ? " closed" : "")}>
                <li className="btn"><Link to="/">Home </Link></li>
                <li className="btn"><Link to="/about">About </Link></li>
                <li className="btn"><Link to="/adopt">Adopt </Link></li>
            </div>
        </ul>
    )
}

export default Navbar
