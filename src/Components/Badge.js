import React from "react";

function Badges(props) {
    return (
        <div className="ml-2">
            {props.color === "primary" ? <div className="badge primary-bg secondary-text rounded-pill">{props.value}</div>:<div className="badge secondary-bg primary-text rounded-pill">{props.value}</div>}
        </div>
    );
  }
  
  export default Badges;