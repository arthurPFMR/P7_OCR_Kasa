import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Slider from './Slider';

const GetOneRental = () => {
    const params = useParams();
    const [rental, setRental] = useState([])   

    useEffect(() => {
        const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`
        axios.get(rentalApiUrl).then((res) => setRental(res.data));
    }, [params]);
    // console.log(rental);
    return (
        <main>
            <Slider />
        </main>
    );
};

export default GetOneRental;