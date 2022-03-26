import React from "react";

function Userapplication({ application }) {
    return (
        <div className="card p-2 shadow mt-2">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-12 text-center">
                    <img src={"http://localhost:4000/" + application.user_id.image} alt="" height="80" width="80" className="shadow rounded-pill" />
                </div>
                <div className="col-12">
                    <div className="fw-bold fs-5">{application.user_id.name}</div>
                    <div className="d-flex justify-content-between align-items-center">
                        {application.user_id.occupation === 'Student' ? <div className="fs-6">{application.user_id.occupation}</div> : <div className="fs-6">{application.user_id.role}</div>}
                        <div className="secondary-text">{application.user_id.age} years</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="color-bg p-1 rounded">
                        <div className="fw-bold">{application.user_id.clgcompName}</div>
                        {application.user_id.occupation === 'Student' ? <div className="fs-6">University Name</div> : <div className="fs-6">Company Name</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userapplication;