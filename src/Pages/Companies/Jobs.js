import React,{useState,useEffect} from "react";
import "../../App.css";

import Sidenav from "../../Components/Sidenav";
import Companydiv from "../../Components/Companydiv";

import { useDispatch} from 'react-redux';

import { companyjob } from '../../actions/jobs';

import {Link} from "react-router-dom";

function Job() {
    const [currentId, setCurrentId] = useState(0);
    const company  = JSON.parse(localStorage.getItem('profile'))
    const id = company.result._id
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(companyjob(id));
        // eslint-disable-next-line
    }, [currentId,dispatch]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-3 col-xl-2 rounded bg-white">
                    <Sidenav />
                </div>
                <div className="col-12 col-lg-9 col-xl-10">
                    <div className="row my-2">
                        <div className="col-5 offset-7 col-lg-2 offset-lg-10 my-2">
                            <Link to="/create_job" className="btn btn-color-primary float-right rounded">Create a job</Link>
                        </div>
                        <Companydiv  setCurrentId={ setCurrentId}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Job;