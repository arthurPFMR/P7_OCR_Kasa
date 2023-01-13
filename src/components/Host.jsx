import React from "react";
/*
component used to display host informations on Rental.js
  => uses 2 props:
                  -name
                  -picture
=> name is split to index its content
using 'slice' to separate first index from others                 
*/
const Host = (props) => {
  const name = props.name.split(" ");
  const firstName = name.slice(0, 1);
  const hostName = name.slice(1).join(" ");

  return (
    <>
      <div className="host">
        <div className="hostIdentity">
          <p className="hostFirstName">{firstName}</p>
          <p className="hostName">{hostName}</p>
        </div>
        <div className="hostImg">
          <img src={props.picture} alt="Le propriétaire de la location" />
        </div>
      </div>
    </>
  );
};

export default Host;
