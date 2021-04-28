import React from "react";
import Badge from "./Badge"

const Jobcard = ({ job }) => {
    console.log(job)
    return (
        <div className="card p-2 shadow mt-4">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-3 col-lg-2">
                    {job.active === "on" ? <Badge color="primary" value="Active" /> : <Badge color="primary" value="InActive" />}
                </div>
                <div className="col-3 col-lg-2">
                    <Badge color="primary" value="Open Application" />
                </div>
                <div className="col-2 offset-4 offset-lg-6 text-center">10</div>
                <div className="col-12 col-lg-9">
                    <div className="fs-5 fw-bold">{job.postName}</div>
                    <div className="d-flex justify-content-between">
                        <div className="secondary-text">{job.location}</div>
                        <div className="secondary-text">{job.jobType}</div>
                        {job.remote === "on"? <div className="secondary-text">Work From home</div>:<div className="secondary-text">On-site</div>}
                    </div>

                </div>
                <div className="col-12 col-lg-3">
                    <div className="color-bg rounded w-100">
                        <div className="fs-5 fw-bold p-1 rounded text-center">{job.application.length}</div>
                        <div className="text-xs text-secondary text-center">Applied</div>
                    </div>
                </div>
                <div className="col-3 offset-9 col-lg-2 offset-lg-10">View</div>
            </div>
        </div>
    );
}

export default Jobcard;