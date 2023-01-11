import React from "react";
/*
component used to display tags in Rental.js
 => uses 1 props:
                 -keywords (string content of tags[])
*/
const Tags = (props) => {
  return <div className="tags">{props.keywords}</div>;
};

export default Tags;
