import React from "react";
import { motion } from "framer-motion";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "../../App.css";

import FrontImg from "../../Assets/front-img.jpg";
import BackImg from "../../Assets/back-img.jpg";

function Landing() {
    const back_img = {
        hidden: { opacity: 0.5,y:20 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 5 }
    }

    const front_img = {
        hidden: { opacity: 0.5,y:150 },
        visible: { opacity: 1,y:100 },
        transition: { duration: 5 }
    }
    return (
        <div>
            <Navbar page="landing"/>
            <div className="container-fluid">
                <div className="row align-items-md-center">
                    <div className="col-12 col-md-6 col-xl-5 px-3 order-last order-md-first">
                        <div className="my-5 my-md-0 px-sm-0 px-xl-4">
                            <div className="primary-text fw-bold fs-1">Refer your network.</div>
                            <div className="primary-text fw-bold fs-1">They get hired.</div>
                            <div className="secondary-text fw-bold fs-1">You get rewarded.</div>
                            <form className="form-group mt-2">
                                <div className="d-flex align-items-center justify-content-between rounded-pill shadow holder p-1 primary-border">
                                    <Input type="text" placeholder="Your Email" class="form-control rounded-pill border-white input-custom" labelclass="d-none" labelcheck="d-none" />
                                    <Button class="btn btn-color-primary rounded-pill fw-bold" value="Sign up" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-7 order-first order-md-last h-90">
                        <div className="row">
                            <div className="col-6 col-md-6 text-center">
                                <motion.div className="front-img" initial="hidden" animate="visible" variants={front_img}>
                                    <img src={FrontImg} alt="" className="shadow rounded image" />
                                </motion.div>
                            </div>
                            <div className="col-6 col-md-6 text-center">
                                <motion.div className="front-img" initial="hidden" animate="visible" variants={back_img}>
                                    <img src={BackImg} alt="" className="shadow rounded image" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;