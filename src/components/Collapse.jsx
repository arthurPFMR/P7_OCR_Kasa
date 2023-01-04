import React, { useState } from 'react';

import arrowUp from "../assets/images/arrow-up.png";
import arrowDown from "../assets/images/arrow-down.png";


const Collapse = ({ title, content }) => {
const [collapseOff, setCollapseOn] = useState(null);

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
        {collapseOff && <p>{content}</p>}
        </div>
        </div>
    );
};

export default Collapse;