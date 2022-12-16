import React, { useEffect, useState } from "react";
import axios from "axios";

import Description from "./Description";


const RentalById = () => {
  const [rentalData, setRentalData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/rentals").then((res) => setRentalData(res.data));
    // console.log(rentalData);
  }, []);
  return (
    <div>
    <div>
      {rentalData.map(
        (rental) => (
          // (<Carousel key={rental.id} rental={rental} />),
          (<Description key={rental.id} rental={rental} />)
        )
      )}
    </div>
        <div>
        {rentalData.map(
          (rental) => (
            // (<Carousel key={rental.id} rental={rental} />),
            (<Description key={rental.id} rental={rental} />)
          )
        )}
      </div>
      </div>


  );
};

export default RentalById;
