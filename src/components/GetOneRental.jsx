// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import Slider from "./Slider";

const GetOneRental = () => {
  // const params = useParams();
  // const [rental, setRental] = useState([]);

  // useEffect(() => {
  //   const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`;
  //   // console.log(rentalApiUrl);
  //   axios.get(rentalApiUrl).then((res) => setRental(res.data));
  // }, [params]);
  // console.log(rental.tags);

  return (
    <main>
      <Slider />
      {/* <h2>{rental.title}</h2>
      <p>{rental.location}</p> */}
      {/* <p>{rental.description}</p> */}
      {/* <div className="host">
          <p>{rental.host.name}</p>
          <img
            src={rental.host.picture}
            alt={"Photo de " + rental.host.name + ", propriétaire du logement"}
          />
        </div> */}
    </main>
  );
};

export default GetOneRental;
