import React, { useState, useEffect } from "react";
import "../../App.css";
import { useDispatch } from 'react-redux';

import { getusers } from '../../actions/user';
import Userdiv from "../../Components/Userdiv";

function User() {
    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getusers());
    }, [currentId, dispatch]);

    return (
            <div className="row height-max">
                <div className="col-12">
                    <div className="row my-2">
                        <div className="col-12">
                        <Userdiv setCurrentId={setCurrentId} />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default User;