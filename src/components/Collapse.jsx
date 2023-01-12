import React, { useState } from 'react';

import arrowUp from "../assets/images/arrow-up.png";
import arrowDown from "../assets/images/arrow-down.png";
/*
component used to create collapsable content.
    => uses 2 props:
                    -title
                    -content
    => uses 1 state:
                    -true or false
default state is false  makes down

the toggle function asks collapse to set active
if the state is not active, using 'onClick' event
to deployed or closed content.
*/

const Collapse = ({ title, content }) => {
const [IsCollapseActive, setCollapseActive] = useState(false);

const toggle = () => {
    setCollapseActive(!IsCollapseActive);
};

    return (
       <div className="collapse">
        <div className="collapseTitle">{title}
{/* content hidden: */}
        {!IsCollapseActive && <img className='arrows' src={arrowDown} alt="Développer le contenu" onClick={toggle}/>}
{/* content deployed */}
        {IsCollapseActive && <img className='arrows' src={arrowUp} alt="Fermer le contenu" onClick={toggle}/>}
        </div>
        <div className="collapseContent">
        {IsCollapseActive && <li>{content}</li>}
        </div>
        </div>
    );
};

export default Collapse;