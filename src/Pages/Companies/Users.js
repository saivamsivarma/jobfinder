import React, { useState, useEffect } from "react";
import "../../App.css";
import { useDispatch } from 'react-redux';

import { getusers } from '../../actions/user';

import Sidenav from "../../Components/Sidenav";
import Userdiv from "../../Components/Userdiv";

function User() {
    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getusers());
    }, [currentId, dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2 rounded bg-white">
                    <Sidenav />
                </div>
                <div className="col-12 col-lg-9 col-xl-10">
                    <div className="row my-2">
                        <div className="col-12">
                        <Userdiv setCurrentId={setCurrentId} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;