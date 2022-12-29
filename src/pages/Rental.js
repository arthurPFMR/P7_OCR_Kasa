import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../assets/database/db.json";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";


const Rental = () => {
  const { id } = useParams();

  const rental = data.find((data) => data.id === id);
console.log(rental);
  return !rental ? (
    <Navigate to="/" />
  ) : (
    <>
      <main>
        <Slider pictures={rental.pictures} title={rental.title} />

        <div className="informations">
          <div className="rentalInfo">
        <h3>{rental.title}</h3>
        <p>{rental.location}</p>
        <div className="tagsBloc">
          {rental.tags.map((tags, index) => (
            <Tags key={index} keywords={tags} />
          ))}
          </div>
          </div>
          <div className="renterInfo">
          <Host name={rental.host.name} picture={rental.host.picture} />
            <Rating />
            </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Rental;
