import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetData = () => {
    const params = useParams();
    const [rental, setRental] = useState([]) 
    

    useEffect(() => {
        const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`
        axios.get(rentalApiUrl).then((res) => setRental(res.data));
    }, [params]);

    return (
        {rental}
    )
};

export default GetData;