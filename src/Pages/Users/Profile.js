import React from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";

function Profile() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2 bg-white">
                    <Sidenav page="user" />
                </div>
                <div className="col-12 col-lg-9 col-xl-10 color-bg height-max">
                    <div className="row">
                        <div className="scroll-div-profile overflow-auto" id="custom_scroll_bar">
                            <div className="col-12 col-md-7 mt-3 border-0">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="fs-2">Your Profile</div>
                                    <div className="text-secondary">Edit Profile</div>
                                </div>
                                <div className="card shadow p-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="fs-5">Vamsi Varma</div>
                                            <div className="fs-6 text-secondary">Student</div>
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