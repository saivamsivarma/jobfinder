import React from "react";

const Input= ({properties,label,name,type,placeholder,handleChange}) =>{
    return (
                <div className={properties}>
                    <label className="form-label">{label}</label>
                    <input name={name} type={type} className="form-control shadow-sm" placeholder={placeholder} required onChange={handleChange}/>
                </div>
    );
}
export default Input;