import React from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";


function Settings() {
    return (
        <div className="container-fluid">
            <div className="row align-items-start">
                <div className="col-12 col-lg-3 col-xl-2 rounded">
                    <Sidenav />
                </div>
                <div className="col-12 col-lg-9 col-xl-10 color-bg">
                    
                </div>
            </div>
        </div>
    );
}

export default Settings;