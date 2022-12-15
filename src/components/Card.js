import React from 'react';

const Card = ({ rental }) => {
    return (
        <a href={"http://localhost:3000/rental/" + rental.id}>
        <li className='card'>
            <img src={rental.cover} alt={"Nom de la location : " + rental.title}/>
            <div className="card-infos">
                <h3>{rental.title}</h3>
            </div>
        </li>
        </a>
    );
};

export default Card;