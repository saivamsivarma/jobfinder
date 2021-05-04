import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {  motion } from "framer-motion";
import { getdetails } from "../../actions/jobDetails";
import { relatedJobs } from "../../actions/jobs";
import { useDispatch, useSelector } from 'react-redux';
import Badge from "../../Components/Badge";
function Jobdetails() {
    let { id } = useParams()
    const job = useSelector((state) => state.jobdetails);
    const dispatch = useDispatch();
    useEffect(() => {
        let value = job.jobType
        dispatch(getdetails(id));
        dispatch(relatedJobs(value));
    }, [id, dispatch]);
    // eslint-disable-next-line
    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        in: {
            opacity: 1,
            scale: 1
        },
        out: {
            opacity: 0,
            scale: 1.2
        }
    };

    const pageTransition = {
        type: "fadein",
        duration: 0.6
    };
    return (
        <>
            {!job.postName ?
                <div className="row justify-content-center align-items-center height-max">
                    <div className="col-2">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> :
                <motion.div className="row height-max gx-2" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                    <div className="col-12 col-lg-4">
                        <div className="card p-2">
                        <div className="text-secondary">Jobs Avaliable in</div>
                            <div className="fs-4 secondary-text">{job.company_id.companyname}</div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="card p-3">
                            <div className="fs-4 secondary-text">{job.postName} in {job.location} at {job.company_id.companyname}</div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="fs-5 primary-text">{job.postName}</div>
                                    <div className="fs-6 text-secondary">{job.company_id.companyname}</div>
                                </div>
                                <img src={"https://jobfinder-project.herokuapp.com/" + job.company_id.logo} alt={job.company_id.companyname} height="80" />
                            </div>
                            <div className="row gy-3">
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Company Description</div>
                                    <div className="text-justify">{job.company_id.description}</div>
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
                                    {!job.remote ? <div className="primary-text">On site</div> :
                                        <div className="primary-text">Remote</div>}
                                </div>
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Job Description</div>
                                    <div className="text-justify">{job.description}</div>
                                </div>
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Skill(s) required</div>
                                    <div className="row" >
                                        {job.keyword.map((word) =>
                                            <div key={word} className="col-6 col-lg-2">
                                                <Badge value={word} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                <button className="btn btn-color-primary shadow w-25 my-3">Apply now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </>
    );
}

export default Jobdetails;