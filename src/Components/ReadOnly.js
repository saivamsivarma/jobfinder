import React from "react";

const ReadOnly= ({properties,label,name,placeholder,value}) =>{
    return (
                <div className={properties}>
                    <label className="form-label">{label}</label>
                    <input name={name} type="text" className="form-control shadow-sm" placeholder={placeholder} value={value} readOnly/>
                </div>
    );
}
export default ReadOnly;