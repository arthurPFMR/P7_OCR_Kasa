import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const GetallRentals = () => {
  const [rentalsData, setRentalsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/rentals").then((res) => setRentalsData(res.data));console.log("ok");
  }, []);
console.log(rentalsData);
  return (
    <div className="rentalsImages">
        {rentalsData.map((rental, id) => (
          <Card key={id} rental={rental} />
        ))}
    </div>
  );
};

export default GetallRentals;
