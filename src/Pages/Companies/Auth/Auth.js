import React, { useState } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.svg"
import Login from "./Login";
import Signup from "./Signup";


function Auth() {
    const [component, setComponent] = useState("Login")
    console.log(component)

    function handleClick(e) {
        e.preventDefault();
        if (component === "Login") {
            setComponent("Signup");
            console.log(component);
        }
        else {
            setComponent("Login");
            console.log(component)
        }
    }
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-lg-5 p-2 bg-white height-max rounded shadow">
                    <div className="d-flex justify-content-between px-0 mb-5">
                        <img src={logo} alt="" height="40" />
                        <div className="d-flex">
                            <Link to="/" className="link p-2 btn" role="button">Home</Link>
                            <Link to="/auth" className="link p-2 btn" role="button">User Login</Link>
                        </div>
                    </div>
                    {component === "Login" ? <div className="px-lg-5 my-3 fs-2 fw-bold secondary-text">Log in to your account</div> : <div className="px-lg-5 my-3 fs-2 fw-bold secondary-text">Create your account</div>}
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
                <div className="col-md-7 text-center">
                    <div className="fs-2">Welcome to <img src={logo} alt="" height="40" /></div>
                    <div className="fs-6 text-secondary">Discover,Apply,Refer your network, and get Rewarded</div>
                </div>
            </div>
        </div>
    );
}

export default Auth;