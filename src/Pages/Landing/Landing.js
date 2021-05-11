import React from "react";
import Navbar from "../../Components/Navbar";
import "../../App.css";
import {Link } from "react-router-dom";
import FrontImg from "../../Assets/front-img.jpg";
import BackImg from "../../Assets/back-img.jpg";

function Landing() {
    return (
        <div className="height-max">
            <Navbar page="landing"/>
            <div className="container-fluid mt-5">
                <div className="row align-items-md-center">
                    <div className="col-12 col-md-6 col-xl-5 px-3 order-last order-md-first">
                        <div className="my-5 my-md-0 px-sm-0 px-xl-4">
                            <div className="primary-text fw-bold fs-1">The Company of your<span className="text-warning"> dream </span>is looking for you.</div>
                            <div className="text-secondary my-3 fw-bold"> The Job Finder gives you an opportunity to anonymous search and simply apply to jobs you are interested in.</div>
                            <Link to="/auth" className="btn btn-warning text-white mt-2 px-4 fw-bold py-2 custom-btn shadow-sm rounded-pill">Get Started</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-7 order-first order-md-last h-90">
                        <div className="row">
                            <div className="col-6 col-md-6 text-center">
                                <div className="front-img mt-5">
                                    <img src={FrontImg} alt="" className="shadow-sm rounded image" height="" width=""/>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 text-center">
                                <div className="front-img">
                                    <img src={BackImg} alt="" className="shadow-sm rounded image" height="" width=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;