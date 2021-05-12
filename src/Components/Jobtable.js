import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {getCompanyapplication} from "../actions/application";

const Jobtable = ({ job }) => {
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
                    <th scope="col text-center">Applications</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-capitalize">{job.postName}</td>
                    <td className="text-capitalize">{application.length}</td>
                    <td className="text-warning fw-bold">View</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Jobtable;