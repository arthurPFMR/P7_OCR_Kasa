import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../assets/database/db.json";
import Slider from "../components/Slider";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const Rental = () => {
  const { id } = useParams();

  const rental = data.find((data) => data.id === id);
  console.log(rental.rating);
  // console.log(rental);
  return !rental ? (
    <Navigate to="/notfoundpage" />
  ) : (
    <>
      <main>
        <Slider pictures={rental.pictures} title={rental.title} />
        <div className="informations">
          <div className="rentalInfo">
            <h3>{rental.title}</h3>

            <p>{rental.location}</p>

            <div className="tagsBloc">
              {rental.tags.map((tag, index) => (
                <Tags key={index} keywords={tag} />
              ))}
            </div>
          </div>
          <div className="renterInfo">
            <Host name={rental.host.name} picture={rental.host.picture} />
            <Rating {...rental} />
          </div>
        </div>
        <div className="rentalCollapse">
          <div className="description">
            <Collapse title="Description" content={rental.description} />
          </div>
          <div className="equipments">
            <Collapse
              title="Équipements"
              content={
                <ul>
                  {rental.equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Rental;
