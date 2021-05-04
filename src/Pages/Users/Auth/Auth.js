import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../../App.css";
import { Link } from "react-router-dom";
import People from "../../../Assets/People.jpg"
import LoginF from "../../../Assets/LoginF.jpg"
import LoginM from "../../../Assets/LoginM.jpg"
import logo from "../../../Assets/logo.svg"
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
    const [component, setComponent] = useState("Login")

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
    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
        }
    };

    const pageTransition = {
        type: "fadein",
        duration: 0.5,
        delay: 0.4
    };
    const imageTransition = {
        type: "fadein",
        duration: 0.5,
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-7 d-none d-lg-block  color-bg height-max">
                    <div className="row mt-lg-2 mt-xl-5 ">
                        <div className="col-12 col-xl-6 ">
                            <motion.div className="front-img" initial="initial" animate="in" exit="out" variants={pageVariants} transition={imageTransition}>
                                <img src={LoginM} alt="" className="shadow rounded img" />
                                <div className="fw-bold fs-4">Search</div>
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <motion.div className="front-img mt-5" initial="initial" animate="in" exit="out" variants={pageVariants} transition={imageTransition}>
                                <div className="fw-bold fs-4">Apply</div>
                                <img src={LoginF} alt="" className="shadow rounded img" />
                            </motion.div>
                        </div>
                        <div className="col-12 col-xl-9 ">
                            <motion.div className="back-img d-flex align-items-center mt-4 ml-5" initial="initial" animate="in" exit="out" variants={pageVariants} transition={imageTransition}>
                                <img src={People} alt="" className="shadow rounded img" />
                                <div className="fw-bold fs-4 secondary-text mx-3"> And Refer</div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div className="col-12 col-lg-5 bg-white rounded" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} style={{ height: '100vh' }}>
                    <div className="row">
                        <div className="col-12 col-lg-7 offset-lg-5">
                            <div className="float-end">
                                    <Link to="/" className="link p-2" role="button">Home</Link>
                                    <Link to="/companiesauth" className="link p-2" role="button">Employee Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 px-lg-5 my-5 my-md-4 text-center">
                        <div className="fs-2 my-2 d-felx alogn-items-center">Welcome to <img src={logo} alt="" height="40" /></div>
                        <div className="fs-6 text-secondary">Discover,Apply,Refer your network, and get Rewarded</div>
                    </div>
                    {component === "Login" ?
                        <div className="px-xl-2">
                            <Login />
                            <div className="text-center mt-2">
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
                </motion.div>
            </div>
        </div>
    );
}

export default Auth;