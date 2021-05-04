import React, { useEffect } from "react";
import "../../App.css";

import { useDispatch, useSelector } from 'react-redux';

import { companyjob } from '../../actions/jobs';

import { Link } from "react-router-dom";
import Jobcard from "../../Components/Jobcard";

function Job() {
    const company = JSON.parse(localStorage.getItem('profile'))
    const id = company.result._id
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(companyjob(id));
        // eslint-disable-next-line
    }, [dispatch]);
    const jobs = useSelector((state) => state.jobs);
    return (
        <div className="row height-max">
            <div className="col-12">
                <div className="row my-2">
                    <div className="col-12">
                        <div className="float-end">
                            <Link to="/company/create_job" className="btn btn-color-primary float-right rounded">Create a job</Link>
                        </div>
                    </div>
                    {!jobs.length ?
                        <div className="col-12">
                            <div className="spinner-border text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="fs-4 fw-bold">No Jobs have been created. Click on create a job.</div>
                        </div> :
                        <>
                            {jobs.map((job) => (
                                <div className="col-12 col-md-6" key={job._id} item={"true"}>
                                    <Jobcard job={job} />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>
    );
}

export default Job;