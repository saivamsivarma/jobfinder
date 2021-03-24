import React from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Card from "../../Components/Card";

function Findjobs() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2">
                    <Sidenav />
                </div>
                <div className="col-12 col-lg-4 col-xl-5 color-bg">
                    <form className="form-group my-4">
                        <div className="d-flex align-items-center justify-content-between rounded-pill shadow-sm p-1 primary-border w-100 bg-white">
                            <Input type="text" placeholder="search by Job title,Role, Job type" class="form-control rounded-pill border-white input-custom2" labelclass="d-none" labelcheck="d-none" />
                            <Button class="btn btn-color-primary rounded-pill fw-bold" value="search" />
                        </div>
                    </form>
                    <Card/>
                </div>
                <div className="col-12 col-lg-5">
                    Map
                </div>
            </div>
        </div>
    );
}

export default Findjobs;