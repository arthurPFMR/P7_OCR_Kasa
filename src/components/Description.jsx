import React from "react";
/*
component used to display rental informations on Rental.js page
  => uses 5 props:
                  -title
                  -location
                  -tags
                  -host name & host picture              
*/
const Description = ({ rental }) => {
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
      {/* <div className="content">
        <div className="description"></div>
        <div className="equipments"></div>
      </div> */}
    </div>
  );
};

export default Description;
