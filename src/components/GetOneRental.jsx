import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Host from './Host';
import Slider from './Slider';
import Tags from './Tags';

const GetOneRental = () => {
    const params = useParams();
    const [rental, setRental] = useState([]) 
    

    useEffect(() => {
        const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`
        axios.get(rentalApiUrl).then((res) => setRental(res.data));
    }, [params]);
    console.log(rental.tags);

    return (
        <main>
            <Slider />
            <h2>{rental.title}</h2>
            <p>{rental.location}</p>
            {/* <Tags /> */}
            <div className="host">
          <p>{rental.host.name}</p>
          <img
            src={rental.host.picture}
            alt={"Photo de " + rental.host.name + ", propriétaire du logement"}
          />
        </div>

        </main>
    );
};

export default GetOneRental;