import React from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";

import Job from "../../Assets/job.svg";
import Semi from "../../Assets/semi.svg"

function Dashboard() {
    const user  = JSON.parse(localStorage.getItem('profile'))

    return (
        <div className="container-fluid color-bg">
            <div className="row align-items-start">
                <div className="col-12 col-lg-3 col-xl-2 rounded bg-white">
                    <Sidenav page="user" />
                </div>
                <div className="col-12 col-lg-9 col-xl-8 height-max">
                    <div className="row mt-2 gy-3">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-itmes-center">
                                <div className="fs-4"> Welcome! {user?.result.name}</div>

                                {user.result.imageUrl ?(<img alt={user?.result.name} src={`https://jobfinder-project.herokuapp.com/`+user?.result.imageUrl} className="img-fluid shadow rounded-pill" width="40" />):<div className="bg-warning text-white rounded px-3 py-2 rounded-pill shadow-sm">{user?.result.name.charAt(0)}</div>}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card shadow card-bg border-0 primary-bg">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-center order-last order-md-first">
                                        <div className="mx-auto px-sm-2 px-md-0">
                                            <div className="fs-1 fw-bold text-white">Get Matched</div>
                                            <div className="fs-5 fw-bold text-white">with jobs best suited to your skills</div>
                                            <div className="d-flex justify-content-evenly my-3">
                                                <button className="btn btn-color-outline-primary">Create a Profile</button>
                                                <button className="btn btn-color-primary">Find a Job</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 text-center p-3 mb-3 mb-md-0 order-first order-md-last">
                                        <img src={Job} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card shadow">
                                <div className="d-flex justify-content-between">
                                    <div className="px-4 py-3">
                                        <div className="fs-5 fw-bold">Jobs Available:</div>
                                        <div className="fs-1 fw-bold mt-1 ml-2 ">1254</div>
                                        <button className="btn btn-color-primary px-3">View All</button>
                                    </div>
                                    <img src={Semi} alt="" className="align-self-end" width="70" height="75" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <div className="card shadow p-2 table-responvise-sm">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Company</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Refered by</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>TCS</td>
                                            <td className="text-capitalize">junior software developer</td>
                                            <td className="text-capitalize">Sai Vamsi Varma</td>
                                            <td className="secondary-text fw-bold">View</td>
                                        </tr>
                                        <tr>
                                            <td>TCS</td>
                                            <td className="text-capitalize">junior software developer</td>
                                            <td className="text-capitalize">Sai Vamsi Varma</td>
                                            <td className="secondary-text fw-bold">View</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;