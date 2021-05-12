import React, { useState } from "react";
import Voicecard from "./Voicecard"
import Badge from "./Badge";
import { useDispatch } from 'react-redux';
import { postapplication } from "../actions/application";

function ModalDiv({ datas, activeJob }) {
    const [selectedJob, setselectedJob] = useState(null)
    const user = JSON.parse(localStorage.getItem('profile'))
    const user_id = user?.result._id
    const formData = { job: selectedJob?._id, user: user_id, company: selectedJob?.company_id?.companyname }
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postapplication(formData))
    }
    return (
        <>
            {!datas ? <></> :
                <div className="row scroll-div overflow-auto" id="custom_scroll_bar">
                    <div className="col-12 col-md-5">
                        <div className="row suggestion-div overflow-auto my-3 color-bg" id="custom_scroll_bar">
                            {datas.map((data, i) => (
                                <div className="col-12" onClick={(e) => { e.preventDefault(); setselectedJob(data) }} role="button">
                                    <Voicecard i={i} job={data} activeJob={activeJob} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center">Scroll Down</div>
                    </div>
                    <div className="col-12 col-md-7 scroll-div2 overflow-auto" id="custom_scroll_bar">{!selectedJob ? <div>Select A job to View Details</div> :
                        <div className="card p-3">
                            <div className="fs-4 secondary-text">{selectedJob.postName} in {selectedJob.location} at {selectedJob.company_id.companyname}</div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="fs-5 primary-text">{selectedJob.postName}</div>
                                    <div className="fs-6 text-secondary">{selectedJob.company_id.companyname}</div>
                                </div>
                                <img src={"https://jobfinder-project.herokuapp.com/" + selectedJob.company_id.logo} alt={selectedJob.company_id.companyname} height="80" />
                            </div>
                            <div className="row gy-3">
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Company Description</div>
                                    <div className="text-justify">{selectedJob.company_id.description}</div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="fw-bold secondary-text">Job Mode</div>
                                    <div className="primary-text">{selectedJob.jobType}</div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="fw-bold secondary-text">Location</div>
                                    <div className="primary-text">{selectedJob.location}</div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="fw-bold secondary-text">Work</div>
                                    {!selectedJob.remote ? <div className="primary-text">On site</div> :
                                        <div className="primary-text">Remote</div>}
                                </div>
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Job Description</div>
                                    <div className="text-justify">{selectedJob.description}</div>
                                </div>
                                <div className="col-12">
                                    <div className="fw-bold secondary-text">Skill(s) required</div>
                                    <div className="row" >
                                        {selectedJob.keyword.map((word, key) =>
                                            <div key={key} className="col-4 col-md-3">
                                                <Badge value={word} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-color-primary w-100 mt-3" onClick={handleSubmit}>Apply now</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            }
        </>
    );
}

export default ModalDiv;