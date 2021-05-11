import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import Badge from "./Badge";
import {getCompanyapplication} from "../actions/application";
import {Link} from "react-router-dom";

const Jobcard = ({ job }) => {
    console.log(job)
    const dispatch = useDispatch();
    const id = job._id
    useEffect(() => {
        dispatch(getCompanyapplication(id))
 // eslint-disable-next-line
    }, [dispatch]);
    const application =useSelector((state) => state.applications);
    return (
        <div className="card p-2 shadow-sm mt-4">
            <div className="row gy-2 gy-md-3 align-items-center">
                <div className="col-3 col-lg-2">
                    {job.active === "on" ? <Badge color="primary" value="Active" /> : <Badge color="primary" value="InActive" />}
                </div>
                <div className="col-3 col-lg-2">
                    <Badge color="primary" value="Open Application" />
                </div>
                <div className="col-12 col-lg-9">
                    <div className="fs-5 fw-bold">{job.postName}</div>
                    <div className="d-flex justify-content-between">
                        <div className="secondary-text">{job.location}</div>
                        <div className="secondary-text">{job.jobType}</div>
                        {job.remote === "on"? <div className="secondary-text">Work From home</div>:<div className="secondary-text">On-site</div>}
                    </div>

                </div>
                <div className="col-12 col-lg-3">
                    <div className="color-bg rounded w-100">
                    {!application.length? <div className="fs-5 fw-bold p-1 rounded text-center">0</div>:<div className="fs-5 fw-bold p-1 rounded text-center">{application.length}</div>}
                        <div className="text-xs text-secondary text-center">Applied</div>
                    </div>
                </div>
                <div className="col-3 offset-9 col-lg-2 offset-lg-10">
                    <Link to={"/company/job/"+job._id} className="btn">View</Link>
                </div>
            </div>
        </div>
    );
}

export default Jobcard;