import React, { useState, useRef, useCallback } from "react";
import "../../App.css";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { useDispatch } from 'react-redux'; 
import { postjob } from "../../actions/jobs"

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import { Link,useHistory } from "react-router-dom";

const MAPBOX_TOKEN = "pk.eyJ1IjoidmFtc2l2YXJtYSIsImEiOiJja255cGl5aTgwMDh1MndsOGNlMW5tcjB1In0.meQKsOns2H20hKPnUQoYrQ";

function Createjob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const company = JSON.parse(localStorage.getItem('profile'))
    const [jobData, setJobData] = useState({ company_id:company.result._id,postName: '', description: '', keyword: '', location: '', jobType: '', address: '', remote: '', fee: '', geo_location: [] });

    const [viewport, setViewport] = useState({
        latitude: 22.199166076052652,
        longitude: 78.47668102723703,
        zoom: 8
    });
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
            const geocoderDefaultOverrides = { transitionDuration: 1000 };

            return handleViewportChange({
                ...newViewport,
                ...geocoderDefaultOverrides
            });
        },
        [handleViewportChange]
    );

    const confirmAddress = async (e) => {
        e.preventDefault();
        const geo = [viewport.latitude, viewport.longitude]
        setJobData({ ...jobData, geo_location: geo })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const geo = [viewport.latitude, viewport.longitude]
        setJobData({ ...jobData, geo_location: geo })
        console.log(jobData)
        dispatch(postjob(jobData,history));
    };

    return (
            <div className="row my-5">
                <div className="col-6">
                    <div className="fs-4 fw-bold mt-2">Job Posting Advert</div>
                </div>
                <div className="col-6">
                    <Link to="/company/jobs" className="btn float-end text-decoration-underline">Back</Link>
                </div>
                <div className="col-12 col-md-8">
                    <form className="form-group px-2 mt-5" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="my-2">
                                    <label className="form-label">Post Name</label>
                                    <input type="text" className="form-control shadow-sm" placeholder="Post Name" value={jobData.postName} onChange={(e) => setJobData({ ...jobData, postName: e.target.value })} />
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Description</label>
                                    <textarea name="description" className="form-control shadow-sm" rows="10" placeholder="Description" value={jobData.description} onChange={(e) => setJobData({ ...jobData, description: e.target.value })}></textarea>
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Skill(s) required</label>
                                    <input name="keyword" type="text" className="form-control shadow-sm" placeholder="Skill(s)" value={jobData.keyword} onChange={(e) => setJobData({ ...jobData, keyword: e.target.value.split(',') })} />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="my-3">
                                    <label className="form-label">Location</label>
                                    <input name="locationname" type="text" className="form-control shadow-sm" placeholder="Location" value={jobData.location} onChange={(e) => setJobData({ ...jobData, location: e.target.value })} />
                                </div>

                                <div className="my-3">
                                    <label className="form-label">Job Type</label>
                                    <input list="Jobs" className="form-control" placeholder="Job type" name="jobType" value={jobData.jobType} onChange={(e) => setJobData({ ...jobData, jobType: e.target.value })} />
                                    <datalist id="Jobs">
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                        <option>internship</option>
                                        <option>Freelancer</option>
                                    </datalist>
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div className="fs-6">I do not want to specify Address</div>
                                    <div className="form-check form-switch">
                                        <input name="address" className="form-check-input" type="checkbox" checked={jobData.address} onChange={(e) => setJobData({ ...jobData, address: e.target.value })} />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between my-3">
                                    <div className="fs-6">Remote</div>
                                    <div className="form-check form-switch">
                                        <input name="remote" className="form-check-input" type="checkbox" checked={jobData.remote} onChange={(e) => setJobData({ ...jobData, remote: e.target.value })} />
                                    </div>
                                </div>
                                <div className="my-3 d-flex align-items-center justify-content-between">
                                    <label className="form-label fs-5">Fee</label>
                                    <input name="fee" type="text" className="form-control shadow-sm w-75" placeholder="Fee" value={jobData.fee} onChange={(e) => setJobData({ ...jobData, fee: e.target.value })} />
                                </div>
                                <button className="btn btn-outline-secondary rounded shadow-sm w-100 my-5">Post a Job</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-4">
                    <form className="form-group px-2 mt-2 mt-lg-5" onSubmit={confirmAddress }>
                        <div className="card p-md-2 shadow-sm">
                            <div style={{ height: "55vh" }}>
                                <MapGL
                                    ref={mapRef}
                                    {...viewport}
                                    width="100%"
                                    height="100%"
                                    onViewportChange={handleViewportChange}
                                    mapboxApiAccessToken={MAPBOX_TOKEN}
                                    mapStyle="mapbox://styles/vamsivarma/cknypxo4c0mgk17qcb4w3wlwp"
                                >
                                    <Geocoder
                                        mapRef={mapRef}
                                        onViewportChange={handleGeocoderViewportChange}
                                        mapboxApiAccessToken={MAPBOX_TOKEN}
                                        position="top-left"
                                        placeholder="Address"
                                    />
                                </MapGL>
                            </div>
                            <button className="btn shadow-sm w-50 my-2 mx-auto btn-color-primary">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Createjob;