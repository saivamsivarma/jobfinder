import React from "react";

function Input(props) {
    return (
                <div className={props.properties}>
                    <label className={props.labelclass}>{props.label}</label>
                    <input type={props.type} className={props.class} placeholder={props.placeholder} required={props.required} readOnly={props.readOnly} />
                </div>
    );
}
export default Input;