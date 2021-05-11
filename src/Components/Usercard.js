import React from "react";

const Usercard = ({ user }) => {
    console.log(user)
    return (
        <div className="card p-2 shadow mt-2" role="button">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-3 text-center">
                    <img src={"https://jobfinder-project.herokuapp.com/" + user.image} alt="" height="80" width="80" className="shadow rounded-pill" />
                </div>
                <div className="col-9 col-md-7">
                    <div className="fw-bold fs-5">{user.name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        {user.occupation === 'Student' ? <div className="fs-6">{user.occupation}</div> : <div className="fs-6">{user.role}</div>}
                        <div className="secondary-text">{user.age} years</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center gy-2">
                        <div className="col-6 col-md-4">
                            {user.occupation === 'Student' ?
                                <div className="secondary-bg p-1 rounded">
                                    <div className="text-white fw-bold">{user.contact}</div>
                                    <div className="text-white">Contact</div>
                                </div> : <div className="secondary-bg p-1 rounded">
                                    <div className="text-white fw-bold">{user.experience} Years</div>
                                    <div className="text-white">Relevant exp.</div>
                                </div>}
                        </div>
                        <div className="col-6 col-md-4">
                            <div className="secondary-bg p-1 rounded">
                                <div className="text-white fw-bold">{user.education}</div>
                                <div className="text-white">Education</div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="color-bg p-1 rounded">
                                <div className="fw-bold">{user.clgcompName}</div>
                                {user.occupation === 'Student' ? <div className="fs-6">University Name</div> : <div className="fs-6">Company Name</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usercard;