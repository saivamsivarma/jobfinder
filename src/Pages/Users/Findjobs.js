import React from "react";
import "../../App.css";
/*import { useDispatch } from "react-redux";
import { useSelector }  from "react-redux";*/

import Sidenav from "../../Components/Sidenav";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

function Findjobs() {
    return (
        <div className="container-fluid color-bg">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2 bg-white rounded">
                    <Sidenav page="user" />
                </div>
                <div className="col-12 col-lg-4 col-xl-6 color-bg height-max">
                    <form className="form-group my-4">
                        <div className="d-flex align-items-center justify-content-between rounded-pill shadow holder p-1 primary-border bg-white">
                            <input type="text" placeholder="Your Email" className="form-control rounded-pill border-white input-custom" />
                            <Button class="btn btn-color-primary rounded-pill fw-bold" value="Sign up" />
                        </div>
                    </form>
                    <div className="scroll-div overflow-auto" id="custom_scroll_bar">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="text-center secondary-text fw-bold fs-5">Scroll Down</div>
                </div>
                <div className="col-12 col-md-12 col-lg-4 color-bg height-max">
                    Map
                </div>
            </div>
        </div>
    );
}

export default Findjobs;