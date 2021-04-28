import React from "react";
import { useSelector } from 'react-redux';

import Jobcard from "./Jobcard";

function Companydiv({setCurrentId}) {
    const jobs = useSelector((state) => state.jobs);
    return (
        !jobs.length ?<div className="row my-2">
                <div className="col-12">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            : (
                <div className="row my-2">
                    {jobs.map((job) => (
                        <div className="col-12 col-lg-6" key={job._id} item={'true'}>
                            <Jobcard job={job}/>
                        </div>
                    ))}
                </div>
            )
    );
}

export default Companydiv;