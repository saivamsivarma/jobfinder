import React from "react";
import { Link } from "react-router-dom";

const ReferTable = ({ refer }) => {
    return (
        <Link to={'/user-page/job/' + refer.job_id._id} className="text-decoration-none primary-text py-2">
            <div className="row">
                <div className="col-6 col-lg-4">
                    <div className="fs-5 secondary-text d-bolck d-lg-none">Company</div>
                    <div className="fs-6">{refer.company}</div>
                </div>
                <div className="col-6 col-lg-4 order-sm-5">
                    <div className="fs-5 secondary-text d-bolck d-lg-none">Refer by</div>
                    <div className="fs-6">{refer.user_id.name}</div>
                </div>
                <div className="col-12 col-lg-4 order-sm-1">
                    <div className="fs-5 secondary-text d-bolck d-lg-none">Post</div>
                    <div className="fs-6">{refer.job_id.postName}</div>
                </div>
            </div>
        </Link>
    );
}

export default ReferTable;