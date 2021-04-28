import React from "react";
import { useSelector } from 'react-redux';

import Usercard from "./Usercard";

function Userdiv({ setCurrentId }) {
    const users = useSelector((state) => state.users);
    console.log(users)

    return (
        !users.length ? <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div> : (
            <div className="row my-2">
                {users.map((user) => (
                    <div className="col-12 col-lg-6" key={user._id} item={"true"}>
                        <Usercard user={user} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        )
    );
}

export default Userdiv;