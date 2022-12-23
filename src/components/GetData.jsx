import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GetData = () => {
    const params = useParams();
    const [data, setData] = useState([]) 
    

    useEffect(() => {
        const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`
        axios.get(rentalApiUrl).then((res) => setData(res.data));
    }, [params]);

    return (
        {data}
    )
};

export default GetData;