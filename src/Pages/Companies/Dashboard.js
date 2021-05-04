import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch,useSelector } from 'react-redux';
import Jobtable from "../../Components/Jobtable";

import { companyjob } from '../../actions/jobs';
import { getusers } from '../../actions/user';

import Job from "../../Assets/job.svg";
import Semi from "../../Assets/semi.svg"

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('profile'))
    const id = user.result._id
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getusers());
        dispatch(companyjob(id))
 // eslint-disable-next-line
    }, [dispatch]);
    const users =useSelector((state) => state.users); 

    const jobs = useSelector((state) => state.jobs);
    return (
            <div className="row">
                <div className="col-12 col-lg-10 my-2">
                    <div className="row mt-2 gy-3">
                        <div className="col-12">
                            <div className="fs-4"> Welcome! {user?.result.name}</div>
                        </div>
                        <div className="col-12">
                            <div className="card shadow card-bg border-0 primary-bg mt-1">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-6 text-center order-last order-md-first">
                                        <div className="mx-auto px-sm-2 px-md-0">
                                            <div className="fs-1 fw-bold text-white">Get Matched</div>
                                            <div className="fs-6 fw-bold text-white">with Developer best suited to your Company</div>
                                            <div className="d-flex justify-content-evenly my-3">
                                                <button className="btn btn-color-outline-primary">Create a Job</button>
                                                <button className="btn btn-color-primary">View Applications</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 text-center p-3 mb-3 mb-md-0 order-first order-md-last">
                                        <img src={Job} alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="card shadow">
                                <div className="d-flex justify-content-between">
                                    <div className="px-4 py-3">
                                        <div className="fs-5 fw-bold">Profile Available:</div>
                                        <div className="fs-1 fw-bold mt-1 ml-2 ">{users.length}</div>
                                        <button className="btn btn-color-primary px-3">View All</button>
                                    </div>
                                    <img src={Semi} alt="" className="align-self-end" width="70" height="75" />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-7">
                            <div className="card p-2 shadow">
                                {!jobs.length ? <div className="text-center">
                                    Publish a Job
                                </div> :
                                    <>
                                        {jobs.map((job) => (
                                            <Jobtable job={job} key={job._id}/>
                                        ))}</>}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card p-4 text-center shadow">
                                <div className="fs-4 fw-bold">Voice bot</div>
                                <div className="fs-6 text-secondary ">click here to know how voice bot works</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Dashboard;