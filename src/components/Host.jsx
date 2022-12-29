import React from 'react';

const Host = (props) => {
    return (
        <>
        <div className="host">
            <p className='hostName'>{props.name}</p>
        </div>
        <div className="hostImg">
            <img src={props.picture} alt="Le propriétaire de la location" />
        </div>
        </>
    );
};

export default Host;