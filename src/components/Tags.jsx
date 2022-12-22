import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tags = () => {
  const params = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`;
    axios.get(rentalApiUrl).then((res) => setRental(res.data));
  }, [params]);

  const keywords = rental.tags;

  return keywords.map((tag) => <li key={tag}>{tag}</li>);
};

export default Tags;
