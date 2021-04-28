import React from "react";

const Usercard= ({user}) =>{

    return (
        <div className="card p-2 shadow">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-12 col-lg-3 text-center">
                    <img src={"http://localhost:5000/" + user.image} alt="" height="80" className="shadow rounded-pill" />
                </div>
                <div className="col-12 col-lg-7">
                    <div className="fw-bold fs-5">{user.name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="fs-6">{user.role}</div>
                        <div className="secondary-text">{user.location}</div>
                        <div className="secondary-text">{user.age} years</div>
                    </div>
                </div>
                <div className="col-lg-2 text-center">
                    <div className="btn btn-color-primary">view</div>
                    <div className="fw-bold">10</div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center gy-2">
                        <div className="col-6 col-lg-3">
                            <div className="secondary-bg p-1 rounded">
                                <div className="text-white fw-bold">{user.exp} Years</div>
                                <div className="text-white">Relevant exp.</div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="secondary-bg p-1 rounded">
                                <div className="text-white fw-bold">{user.seniority}</div>
                                <div className="text-white">Seniority</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="color-bg p-1 rounded">
                                <div className="fw-bold">{user.education}</div>
                                <div className="">Education</div>
                            </div>
                        </div>
                        <div className="col-12">
                        <button className="btn btn-color-primary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usercard;