import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Rentals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/rentals").then((res) => setData(res.data));
  }, []);

  return (
    <div className="rentals">
      <ul>
        {data.map((rental) => (
          <Card key={rental.id} rental={rental}/>
        ))}
      </ul>
    </div>
  );
};

export default Rentals;
