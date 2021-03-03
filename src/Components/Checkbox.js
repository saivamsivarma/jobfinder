import React from "react";

function Checkbox(props) {
    return (
        <div className="mt-2">
            <input type="checkbox" className={props.class} />
            <label className="form-check-label">{props.label}</label>
        </div>
    );
}

export default Checkbox;