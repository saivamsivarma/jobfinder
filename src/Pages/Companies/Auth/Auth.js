import React, { useState } from "react";
import "../../../App.css";

import logo from "../../../Assets/logo.svg"
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
    const [component, setComponent] = useState("Login")
    console.log(component)

    function handleClick(e) {
        e.preventDefault();
        if(component==="Login"){
            setComponent("Signup");
            console.log(component);
        }
        else{
            setComponent("Login");
            console.log(component)
        }
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center color-bg">
                <div className="col-12 col-lg-5 card p-2 shadow">
                    <div className="w-100 px-lg-5 my-5 my-md-4 text-center">
                        <div className="fs-2 my-2 d-felx alogn-items-center">Welcome to <img src={logo} alt="" height="40" /></div>
                        <div className="fs-6 text-secondary">Discover,Apply,Refer your network, and get Rewarded</div>
                    </div>
                    {component === "Login" ?
                        <div className="px-xl-2">
                            <Login />
                            <div className="text-center">
                                <div className="btn">New User? <span className="secondary-text fw-bold" onClick={handleClick}>Create An Account</span></div>
                            </div>
                        </div>
                        : component === "Signup" ?
                            <div className="px-xl-2">
                                <Signup />
                            <div className="text-center mt-3">
                                <div className="btn">Old User?<span className="secondary-text fw-bold" onClick={handleClick}> Login To Account</span></div>
                            </div>
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default Auth;