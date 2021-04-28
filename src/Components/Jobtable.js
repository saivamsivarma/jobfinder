import React from "react";

const Jobtable = ({ job }) => {
    console.log(job)
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Job Role</th>
                    <th scope="col">No.of Applied</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-capitalize">{job.postName}</td>
                    <td className="text-capitalize">{job.application.length}</td>
                    <td className="secondary-text fw-bold">View</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Jobtable;