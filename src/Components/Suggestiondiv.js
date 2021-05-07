import React, { useEffect } from "react";
import { relatedJobs } from "../actions/jobs";
import { useDispatch, useSelector } from 'react-redux';
import SuggestionJobs from "./SuggestionJobs";

function Suggestiondiv({ value,id }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(relatedJobs(value));
    }, [dispatch, value]);
    console.log(value)
    const jobs = useSelector((state) => state.relatedjobs);
    const newdata = jobs.filter(job => job._id !== id)
    const newJobs = newdata
    console.log(newJobs)
    return (
        <div className="row align-tems-center justify-content-center suggestion-div overflow-auto my-3" id="custom_scroll_bar">
            {!newJobs.location===value?
                <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> :
                newJobs.map((newJob) => (
                    <div className="col-12" key={newJob._id}>
                        <SuggestionJobs job={newJob}/>
                    </div>
                ))
            }
        </div>
    );
}

export default Suggestiondiv;