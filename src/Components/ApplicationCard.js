import React from "react";

function ApplicationCard({ application }) {
    return (
        <div className="card p-4 shadow-sm my-2 mx-1">
            {!application._id ? <div className="row justify-content-between align-items-center">
                <div className="col-2">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
                <div className="row gy-2 gy-md-2">
                    <div className="col-12">
                        <div className="details">
                            <div className="fw-bold secondary-text">{application.job_id.postName}</div>
                            <div className="fw-bold primary-text">{application.company}</div>
                        </div>
                    </div>
                    <div className="col-4">
                        {application.status === 'Pending' ? <span className="badge rounded-pill bg-warning text-dark">Pending</span> : application.status === 'Reject' ? <span className="badge rounded-pill bg-danger">Rejected</span> : <span className="badge rounded-pill bg-success">Accpeted</span>}
                    </div>
                    <div className="col-4">
                        <span className="badge rounded-pill primary-bg secondary-text text-capitalize">{application.job_id.jobType}</span>
                    </div>
                    <div className="col-4">
                        <span className="badge rounded-pill primary-bg secondary-text text-capitalize">{application.job_id.location}</span>
                    </div>
                </div>}
        </div>
    );
}

export default ApplicationCard;