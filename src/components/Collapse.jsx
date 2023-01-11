import React, { useState } from 'react';

import arrowUp from "../assets/images/arrow-up.png";
import arrowDown from "../assets/images/arrow-down.png";
/*
component used to create collapsable content.
    => uses 2 props:
                    -title
                    -content
    => uses 1 state:
                    -true/false
default state is false  to hide content
*/
const Collapse = ({ title, content }) => {
const [collapseOff, setCollapseOn] = useState(false);

const toggle = () => {
    setCollapseOn(!collapseOff);
};

    return (
       <div className="collapse">
        <div className="collapseTitle" onClick={toggle}>{title}
        {!collapseOff && <img className='arrows' src={arrowDown} alt="Développer le contenu" />}
        {collapseOff && <img className='arrows' src={arrowUp} alt="Fermer le contenu" />}
        </div>
        <div className="collapseContent">
        {collapseOff && <li>{content}</li>}
        </div>
        </div>
    );
};

export default Collapse;