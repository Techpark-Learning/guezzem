import React from "react";

const Settings = (props)=>{
  const {
    listLength,
    setListLength,
    listAdd,
    listRemove
  } = props;

  return(
    <div className="columns">
      <div className="column">
        <a onClick={listRemove}>-</a>
         <span>{listLength}</span>
         <a onClick={listAdd}>+</a>
      </div>
    </div>
  )
}

export default Settings;
