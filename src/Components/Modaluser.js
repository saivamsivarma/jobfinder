import React, { useState } from "react";
import UserVoicecard from "./UserVoicecard";

function Modaluser({ datas, activeUser }) {
    const [selectedUser, setselectedUser] = useState(null)
    const skill = selectedUser?.skills
    var newSkills = skill?.split(',')
    return (
        <>
            {!datas ? <></> :
                <div className="row scroll-div overflow-auto" id="custom_scroll_bar">
                    <div className="col-12 col-md-7">
                        <div className="row suggestion-div overflow-auto my-3 color-bg" id="custom_scroll_bar">
                            {datas.map((data,i) => (
                                <div className="col-4" onClick={(e) => { e.preventDefault(); setselectedUser(data) }} role="button">
                                    <UserVoicecard user={data} activeUser={activeUser} i={i}/>
                                </div>
                            ))}
                        </div>
                        <div className="text-center">Scroll Down</div>
                    </div>
                    <div className="col-12 col-md-5">{!selectedUser ? <div>Select A User to View there details</div> :
                        <div className="row gy-2 gy-md-3 align-items-center">
                        <div className="col-3 text-center">
                            <img src={"https://jobfinder-project.herokuapp.com/" + selectedUser?.image} alt="" height="80" width="80" className="shadow rounded-pill" />
                        </div>
                        <div className="col-9 col-md-7">
                            <div className="fw-bold fs-5">{selectedUser?.name}</div>
                            <div className="d-flex justify-content-between align-items-center">
                                {selectedUser?.occupation === 'Student' ? <div className="fs-6">{selectedUser?.occupation}</div> : <div className="fs-6">{selectedUser?.role}</div>}
                                <div className="secondary-text">{selectedUser?.age} years</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center gy-2">
                                <div className="col-6 col-md-4">
                                    {selectedUser?.occupation === 'Student' ?
                                        <div className="secondary-bg p-1 rounded">
                                            <div className="text-white fw-bold">{selectedUser?.contact}</div>
                                            <div className="text-white">Contact</div>
                                        </div> : <div className="secondary-bg p-1 rounded">
                                            <div className="text-white fw-bold">{selectedUser?.experience} Years</div>
                                            <div className="text-white">Relevant exp.</div>
                                        </div>}
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="secondary-bg p-1 rounded">
                                        <div className="text-white fw-bold">{selectedUser?.education}</div>
                                        <div className="text-white">Education</div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="color-bg p-1 rounded">
                                        <div className="fw-bold">{selectedUser?.clgcompName}</div>
                                        {selectedUser?.occupation === 'Student' ? <div className="fs-6">University Name</div> : <div className="fs-6">Company Name</div>}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="color-bg p-1 rounded">
                                        <div className="fw-bold">{selectedUser?.email}</div>
                                        <div className="fs-6">Email</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {selectedUser.occupation === 'Student' ?
                                        <></> :
                                        <div className="color-bg p-1 rounded">
                                            <div className="fw-bold">{selectedUser?.contact}</div>
                                            <div className="fs-6">Contact</div>
                                        </div>}
                                </div>
                                <div className="fw-bold">Skill(s)</div>
                                <>{newSkills.map((skill) =>
                                                        <div key className="col-4 col-md-2">
                                                            <div className="badge secondary-bg primary-text rounded-pill">{skill}</div>
                                                        </div>
                                                    )}</>
                                <div className="col-12 mt-3">
                                    <a href={`mailto: ${selectedUser?.email}`} className="btn w-100 btn-color-primary shadow-sm">Send Email</a>
                                </div>
                            </div>
                        </div>
                    </div>}
                    </div>
                </div>
            }
        </>
    );
}

export default Modaluser;