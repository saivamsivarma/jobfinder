import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {getCompanyapplication} from "../actions/application";

const Jobtable = ({ job }) => {
    console.log(job)
    const dispatch = useDispatch();
    const id = job._id
    useEffect(() => {
        dispatch(getCompanyapplication(id))
 // eslint-disable-next-line
    }, [dispatch]);
    const application =useSelector((state) => state.applications); 
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Job Role</th>
                    <th scope="col">Location</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-capitalize">{job.postName}</td>
                    <td className="text-capitalize text-center">{application.length}</td>
                    <td className="secondary-text fw-bold">View</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Jobtable;