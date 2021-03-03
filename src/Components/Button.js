import React from "react";

function Button(props) {
    return (
        <button className={props.class}>{props.value}</button>
    );
  }
  
  export default Button;