import React from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";
import User from "../../Assets/defaultuser.svg";

function Profile() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2">
                    <Sidenav />
                </div>
                <div className="col-12 col-lg-9 col-xl-10 shadow-sm">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="card shadow-sm p-3 mt-3">
                                <div className="row">
                                    <div className="col-4">
                                        <img src={User} alt="" className="img-fluid shadow-sm rounded-pill bg-warning" width="100" />
                                    </div>
                                    <div className="col-8">
                                        <div>
                                            <div className="fw-bold fs-6">Sai Vamsi Varma</div>
                                            <div className="fs-6">Student</div>
                                            <div className="text-secondary">Vijayawada</div>
                                        </div>
                                        <div className="mt-3">mail</div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="fs-5 fw-bold">About Me</div>
                                <div className="p-2"></div>
                            </div>
                            <div className="my-4">
                                <div className="fs-5 fw-bold">Skills</div>
                                <div className="p-2"></div>
                            </div>
                            <div className="my-4">
                                <div className="fs-5 fw-bold">Language</div>
                                <div className="p-2"></div>
                            </div>
                            <div className="my-4">
                                <div className="fw-bold">Profile Progress</div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="row color-bg align-items-start  py-2">
                                <div className="col-12 col-md-6">
                                    <div className="card mt-2 p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="fw-bold fs-5">Experience</div>
                                            <button className="btn btn-color-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="card mt-2 p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="fw-bold fs-5">Education</div>
                                            <button className="btn btn-color-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card mt-2 p-2">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="fw-bold fs-5">Certificates</div>
                                            <button className="btn btn-color-primary">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;