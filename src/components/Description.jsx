import React from "react";

const Description = ({ rental }) => {
  // const host = {
  //   name: rental.host.name,
  //   picture: rental.host.picture
  // }
  return (
    <div>
      <div className="infos">
        <h3>{rental.title}</h3>
        <h4>{rental.location}</h4>
      </div>
      <div className="tags-host">
        <div className="tags">{rental.tags}</div>

        <div className="host">
          <p>{rental.host.name}</p>
          <img
            src={rental.host.picture}
            alt={"Photo de " + rental.host.name + ", propriétaire du logement"}
          />
        </div>
      </div>
      <div className="content">
        <div className="description"></div>
        <div className="equipments"></div>
      </div>
    </div>
  );
};

export default Description;
