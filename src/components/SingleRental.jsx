import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const SingleRental = () => {
    const params = useParams();
    const [rental, setRental] = useState([])   

    useEffect(() => {
        const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`
        axios.get(rentalApiUrl).then((res) => setRental(res.data));
    }, [params]);
    return (
        <div>
            <h1>{rental.title}</h1>
            <img src={rental.cover} alt="" />
        </div>
    );
};

export default SingleRental;