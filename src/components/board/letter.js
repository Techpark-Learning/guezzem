import React from "react";

const Letter = (props)=> {
  return(
    <div className="columns is-one-third">
      <div className="column">
        <h1 id='letter'>{props.currentLetter}</h1>
      </div>
    </div>
   )
};


export default Letter;
