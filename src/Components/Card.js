import React from "react";
import { Link } from "react-router-dom";

function Card({job}) {
    return (
        <div className="card p-4 shadow-sm my-2">
            <div className="row gy-2 gy-md-2">
                <div className="col-12">
                    <div className="d-flex align-item-center justify-content-between">
                        <div className="details">
                            <div className="fw-bold secondary-text">{job.postName}</div>
                            <div className="fw-bold primary-text">{job.company_id.companyname}</div>
                        </div>
                        <img src={"https://jobfinder-project.herokuapp.com/"+job.company_id.logo} alt={job.company_id.companyname} height="40" />
                    </div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Job Mode</div>
                    <div className="primary-text">{job.jobType}</div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Location</div>
                    <div className="primary-text">{job.location}</div>
                </div>
                <div className="col-6 col-md-4">
                    <div className="fw-bold secondary-text">Work</div>
                    {!job.remote? <div className="primary-text">On site</div>:
                    <div className="primary-text">Remote</div>}
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <div className="num-result px-2 rounded-pill"></div>
                        <Link to={"/user-page/job/"+job._id} className="btn btn-color-primary px-3">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Card;