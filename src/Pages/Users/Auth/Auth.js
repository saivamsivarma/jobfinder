import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../../App.css";

import People from "../../../Assets/People.jpg"
import LoginF from "../../../Assets/LoginF.jpg"
import LoginM from "../../../Assets/LoginM.jpg"
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

    const front = {
        hidden: { y: 0,x:0 },
        visible: { y: 110, opacity: 1,x:50 },
        transition: { duration: 5 }
    }
    const middle = {
        hidden: { y: 0, x: 0 },
        visible: { y: 80, x: 10, opacity: 1 },
        transition: { duration: 5 }
    }
    const back = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        transition: { duration: 5 }
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-7 d-none d-lg-block  color-bg height-max">
                    <div className="row mt-lg-2 mt-xl-5 ">
                        <div className="col-12 col-xl-6 ">
                            <motion.div className="front-img" initial="hidden" animate="visible" variants={back}>
                                <img src={LoginM} alt="" className="shadow rounded img" />
                                <div className="fw-bold fs-4">Search</div>
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <motion.div className="front-img" initial="hidden" animate="visible" variants={middle}>
                                <div className="fw-bold fs-4">Apply</div>
                                <img src={LoginF} alt="" className="shadow rounded img" />
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-9 ">
                            <motion.div className="back-img d-flex align-items-center" initial="hidden" animate="visible" variants={front}>
                                <img src={People} alt="" className="shadow rounded img" />
                                <div className="fw-bold fs-4 secondary-text mx-3"> And Refer</div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-5 bg-white rounded">
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