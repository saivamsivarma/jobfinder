import React, { useEffect,useState } from "react";
import "../../App.css";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getjobdetails } from '../../actions/jobs';
import { getCompanyapplication } from "../../actions/application";
import Userapplication from "../../Components/Userapplication";
import ModalBadge from "../../Components/ModalBadge";
function Applicationdetails() {
    let { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanyapplication(id))
        dispatch(getjobdetails(id))
        // eslint-disable-next-line
    }, [id, dispatch]);
    const [selectedUser, setselectedUser] = useState(null)
    const applications = useSelector((state) => state.applications);
    const job = useSelector((state) => state.jobdetails)
    return (
        <>
            {!job._id ?
                <div className="row justify-content-center align-items-center height-max">
                    <div className="col-2">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div> :
                <div className="row height-max">
                    <div className="col-12 col-md-6 col-xl-5 my-2">
                    <Link to="/company/jobs" className="btn text-decoration-underline">Back</Link>
                        <div className="card shadow-sm p-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="fs-5 primary-text">{job.postName}</div>
                                <img src={"http://localhost:4000/" + job.company_id.logo} alt={job.company_id.companyname} height="80" />
                            </div>
                            <div className="row gy-3">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-7">
                        <div className="row">
                            <div className="col-12 text-center fs-4 fw-bold">Applicants</div>
                            {!applications.length? <div className="col-12 text-center fs-4 fw-bold secondary-text">No Applicants Available to View</div>:
                            applications.map((application) => (
                                <div className="col-12 col-md-6 col-xl-5" key={application._id}  role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => { e.preventDefault(); setselectedUser(application) }}>
                                    <Userapplication application={application}/>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            }
            {!selectedUser ? <></> :
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content bg-white">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">About {selectedUser?.user_id.name}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClose={() => { setselectedUser(null) }}></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row gy-2 gy-md-3 align-items-center">
                                        <div className="col-3 text-center">
                                            <img src={"https://jobfinder-project.herokuapp.com/" + selectedUser?.user_id.image} alt="" height="80" width="80" className="shadow rounded-pill" />
                                        </div>
                                        <div className="col-9 col-md-7">
                                            <div className="fw-bold fs-5">{selectedUser?.user_id.name}</div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                {selectedUser?.user_id.occupation === 'Student' ? <div className="fs-6">{selectedUser?.user_id.occupation}</div> : <div className="fs-6">{selectedUser?.user_id.role}</div>}
                                                <div className="secondary-text">{selectedUser?.user_id.age} years</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row align-items-center gy-2">
                                                <div className="col-6 col-md-4">
                                                    {selectedUser?.occupation === 'Student' ?
                                                        <div className="secondary-bg p-1 rounded">
                                                            <div className="text-white fw-bold">{selectedUser?.user_id.contact}</div>
                                                            <div className="text-white">Contact</div>
                                                        </div> : <div className="secondary-bg p-1 rounded">
                                                            <div className="text-white fw-bold">{selectedUser?.user_id.experience} Years</div>
                                                            <div className="text-white">Relevant exp.</div>
                                                        </div>}
                                                </div>
                                                <div className="col-6 col-md-4">
                                                    <div className="secondary-bg p-1 rounded">
                                                        <div className="text-white fw-bold">{selectedUser?.user_id.education}</div>
                                                        <div className="text-white">Education</div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="color-bg p-1 rounded">
                                                        <div className="fw-bold">{selectedUser?.user_id.clgcompName}</div>
                                                        {selectedUser?.user_id.occupation === 'Student' ? <div className="fs-6">University Name</div> : <div className="fs-6">Company Name</div>}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="color-bg p-1 rounded">
                                                        <div className="fw-bold">{selectedUser?.user_id.email}</div>
                                                        <div className="fs-6">Email</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    {selectedUser.user_id.occupation === 'Student' ?
                                                        <></> :
                                                        <div className="color-bg p-1 rounded">
                                                            <div className="fw-bold">{selectedUser?.user_id.contact}</div>
                                                            <div className="fs-6">Contact</div>
                                                        </div>}
                                                </div>
                                                <div className="fw-bold">Skill(s)</div>
                                                <ModalBadge skills={selectedUser?.user_id.skills} />
                                                <div className="col-12">
                                                    <div className="d-flex justify-content-around mt-3 mb-2">
                                                        <button className="btn btn-color-primary px-5 shadow-sm">Reject</button>
                                                        <button className="btn btn-outline-secondary px-5 shadow-sm">Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
        </>
    );
}

export default Applicationdetails;