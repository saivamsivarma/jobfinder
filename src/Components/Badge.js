import React from "react";

function Badges(props) {
    return (
        <div className="my-2">
            {props.color === "primary" ? <div className="badge primary-bg secondary-text shadow-sm rounded-pill text-capitalize">{props.value}</div>:<div className="badge secondary-bg text-white rounded-pill text-capitalize">{props.value}</div>}
        </div>
    );
  }
  
  export default Badges;