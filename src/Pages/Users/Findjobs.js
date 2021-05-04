import React, { useState, useEffect } from "react";
import "../../App.css";
import {  motion } from "framer-motion";
import ReactMapGL, { Marker,Popup } from "react-map-gl";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Components/Card";
import Pin from "../../Assets/pin.svg"
import { getjobs } from "../../actions/jobs"

const MAPBOX_TOKEN = "pk.eyJ1IjoidmFtc2l2YXJtYSIsImEiOiJja255cGl5aTgwMDh1MndsOGNlMW5tcjB1In0.meQKsOns2H20hKPnUQoYrQ";

function Findjobs() {
    const jobs = useSelector((state) => state.jobs);
    const [viewport, setViewport] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        zoom: 4
    });
    const [selectedJob,setSelectedJob] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getjobs());
    }, [dispatch]);

    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        in: {
            opacity: 1,
            scale: 1
        },
        out: {
            opacity: 0,
            scale: 1.2
        }
    };

    const pageTransition = {
        type: "fadein",
        duration: 0.6
    };
    return (
        <>
            {!jobs.length ? <div className="row justify-content-center align-items-center height-max">
                <div className="col-2">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
                <motion.div className="row" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                    <div className="col-12 col-lg-8 col-xl-6 height-max order-last order-md-first p-md-2">
                        <div className="scroll-div overflow-auto" id="custom_scroll_bar">
                            {jobs.map((job) => (
                                <div key={job._id} item={"true"}>
                                    <Card job={job} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center secondary-text fw-bold fs-5">Scroll Down</div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-6 order-first order-md-last">
                        <div className="card shadow-sm my-2" style={{ height: '90vh' }}>
                            <ReactMapGL
                                {...viewport}
                                width="100%"
                                height="100%"
                                onViewportChange={viewport => { setViewport(viewport); }}
                                mapboxApiAccessToken={MAPBOX_TOKEN}
                                mapStyle="mapbox://styles/vamsivarma/cknypxo4c0mgk17qcb4w3wlwp">
                                {jobs.map(job => (
                                    <Marker
                                        key={job._id}
                                        latitude={parseFloat(job.geo_location[0])}
                                        longitude={parseFloat(job.geo_location[1])}>
                                        <button className="btn marker-btn" onClick={(e) =>{e.preventDefault();setSelectedJob(job)}}>
                                            <img src={Pin} alt="Skate Park Icon" />
                                        </button>
                                    </Marker>
                                ))}
                                {selectedJob ?(
                                <Popup latitude={parseFloat(selectedJob.geo_location[0])} longitude={parseFloat(selectedJob.geo_location[1])}
                                onClose= {()=>{setSelectedJob(null)}}>
                                    <div>
                                        <div className="fs-6 secondary-text">{selectedJob.postName}</div>
                                        <div className="primary-text">{selectedJob.company_id.companyname}</div>
                                    </div>
                                </Popup>
                                ):null}
                            </ReactMapGL>
                        </div>
                    </div>
                </motion.div>}
        </>
    );
}

export default Findjobs;