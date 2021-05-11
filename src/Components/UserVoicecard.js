import React from "react";

const UserVoicecard = ({ user,activeUser,i}) => {
    return (
        <div className={`${activeUser === i ? 'activeCard' : ''} card p-2 shadow-sm mt-1`} role="button">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-12 text-center">
                    <img src={"https://jobfinder-project.herokuapp.com/" + user.image} alt="" height="80" width="80" className="shadow rounded-pill" />
                </div>
                <div className="col-12">
                    <div className="fw-bold fs-5">{user.name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        {user.occupation === 'Student' ? <div className="fs-6">{user.occupation}</div> : <div className="fs-6">{user.role}</div>}
                        <div className="secondary-text">{user.age} years</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="color-bg p-1 rounded">
                        <div className="fw-bold">{user.clgcompName}</div>
                        {user.occupation === 'Student' ? <div className="fs-6">University Name</div> : <div className="fs-6">Company Name</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserVoicecard;