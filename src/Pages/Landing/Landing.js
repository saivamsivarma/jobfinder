import React from "react";
import { motion } from "framer-motion";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "../../App.css";

import FrontImg from "../../Assets/front-img.jpg";
import BackImg from "../../Assets/back-img.jpg";

function Landing() {
    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
        },
        out: {
            opacity: 0
        }
    };

    const pageTransition = {
        type: "fadein",
        duration: 0.5,
    };
    return (
        <motion.div className="height-max" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Navbar page="landing"/>
            <div className="container-fluid ">
                <div className="row align-items-md-center">
                    <div className="col-12 col-md-6 col-xl-5 px-3 order-last order-md-first">
                        <div className="my-5 my-md-0 px-sm-0 px-xl-4">
                            <div className="primary-text fw-bold fs-1">The Company of your<span className="secondary-text"> dream </span>is looking for you.</div>
                            <div className="text-secondary my-3"> The Job Finder gives you an opportunity to anonymous search and simply apply to jobs you are interested in.</div>
                            <form className="form-group mt-2">
                                <div className="d-flex align-items-center justify-content-between rounded-pill shadow holder p-1 primary-border bg-white">
                                    <input type="text" placeholder="Your Email" className="form-control rounded-pill border-white input-custom"/>
                                    <Button class="btn btn-color-primary rounded-pill fw-bold" value="Sign up" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-7 order-first order-md-last h-90">
                        <div className="row">
                            <div className="col-6 col-md-6 text-center">
                                <div className="front-img mt-5">
                                    <img src={FrontImg} alt="" className="shadow rounded image" />
                                </div>
                            </div>
                            <div className="col-6 col-md-6 text-center">
                                <div className="front-img">
                                    <img src={BackImg} alt="" className="shadow rounded image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Landing;