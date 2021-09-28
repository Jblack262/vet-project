import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {GrMenu, GrClose} from 'react-icons/gr'

function Navbar(props) {
    const [open, setOpen] = useState(false);
    return (
        <ul className="navBar">
            <div>
                <li className="btn title"><Link to="/">West-MEC Veterinary Science</Link></li>
                {open ? <GrClose onClick={() => setOpen(!open)}/> : <GrMenu onClick={() => setOpen(!open)}/>}
                
            </div>
            <div className={"btnContainer" + (!open ? " closed" : "")}>
                <li className="btn"><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
                <li className="btn"><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
                <li className="btn"><Link onClick={() => setOpen(false)} to="/adopt">Adopt</Link></li>
            </div>
        </ul>
    )
}

export default Navbar
