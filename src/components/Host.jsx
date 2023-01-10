import React from "react";

const Host = (props) => {
  const fullName = props.name.split(" ");
  return (
    <>
      <div className="host">
        <div className="hostIdentity">
          <p className="hostFirstName">{fullName[0]}</p>
          <p className="hostName">{fullName[1]}</p>
        </div>
        <div className="hostImg">
          <img src={props.picture} alt="Le propriétaire de la location" />
        </div>
      </div>
    </>
  );
};

export default Host;
