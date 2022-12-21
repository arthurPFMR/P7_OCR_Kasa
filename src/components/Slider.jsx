import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Slider = () => {
  const params = useParams();
  const [rental, setRental] = useState([]);

  useEffect(() => {
    const rentalApiUrl = `http://localhost:3004/rentals/${params.rentalId}`;
    axios.get(rentalApiUrl).then((res) => setRental(res.data));
  }, [params]);

  const [currentImg, setCurrentImg] = useState(0);

  const handleNext = () => {
    setCurrentImg(currentImg === thumbs.length ? 1 : currentImg + 1);
  };

  const handlePrevious = () => {
    setCurrentImg(currentImg === thumbs.length ? 1 : currentImg - 1);
  };

  const thumbs = rental.pictures;
  console.log(thumbs);

  return (
    <div>
      <button onClick={handlePrevious}>arrow</button>
      <img src={thumbs[currentImg]} alt="" />
      <button onClick={handleNext}>arrow</button>
    </div>
  );
};

export default Slider;
{
  /* {rental.map((rental, index) => (
          <div key={index}>
            <img src={rental.picture} alt="" />
          </div>
        ))} */
}
