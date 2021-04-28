import React from "react";

function Badges(props) {
    return (
        <div>
            {props.color === "primary" ? <div className="badge primary-bg secondary-text rounded-pill">{props.value}</div>:props.value ==="secondary" ?<div className="badge primary-bg secondary-text rounded-pill">{props.value}</div>:<></>}
        </div>
    );
  }
  
  export default Badges;