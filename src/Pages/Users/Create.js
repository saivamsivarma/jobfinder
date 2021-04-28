import React, { useState, useRef, useCallback } from "react";
import "../../App.css";
import Dropzone from 'react-dropzone';

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";


import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import User from "../../Assets/defaultuser.svg"
import { userprofile } from "../../actions/user";

const MAPBOX_TOKEN = "pk.eyJ1IjoidmFtc2l2YXJtYSIsImEiOiJja255cGl5aTgwMDh1MndsOGNlMW5tcjB1In0.meQKsOns2H20hKPnUQoYrQ";

function Createprofile() {
    const user  = JSON.parse(localStorage.getItem('profile'))
    const [formData, setFormData] = useState({ _id:user.result._id,name: user.result.name, email:user.result.email,age:'', contact:'', occupation:'',clgcompName:'',role:'',seniority:'',experience:'',shareprofile:'',skills:'',geo_location:'',image:''});
    const history = useHistory();
    const dispatch = useDispatch();

    const [viewport, setViewport] = useState({
        latitude: 22.199166076052652,
        longitude: 78.47668102723703,
        zoom: 8
    });
    const mapRef = useRef();

    const [file, setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');
    // eslint-disable-next-line
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const dropRef = useRef();

    const onDrop = (files) => {
        const [uploadedFile] = files;
        setFile(uploadedFile);

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewSrc(fileReader.result);
        };
        fileReader.readAsDataURL(uploadedFile);
        console.log(uploadedFile.path)
        setFormData({...formData,image:uploadedFile})
        console.log(formData)
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    };

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
        setFormData({ ...formData, geo_location: geo })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const geo = [viewport.latitude, viewport.longitude]
        setFormData({ ...formData, geo_location: geo })
        setFormData({...formData,image:file})
        dispatch(userprofile(formData,history));
        console.log(formData)
    };

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                    <div className="fs-4 fw-bold mt-2">Jobfinder Profile</div>
                </div>
                <div className="col-12 col-md-8">
                    <form className="form-group px-2 my-3" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="text-center">
                                    <div className="text-center">
                                        <div className="mb-2">
                                            {previewSrc ? (<img className="preview-image rounded-circle shadow" src={previewSrc} alt="Preview" height="150" width="150" />) : (<img src={User} alt="" className="rounded-circle shadow bg-white" height="150" width="150" />)}
                                        </div>
                                        <div>
                                            <Dropzone
                                                onDrop={onDrop}>
                                                {({ getRootProps, getInputProps }) => (
                                                    <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                                        <input {...getInputProps()} />
                                                        <p className="click-enable btn btn-color-primary">Upload Image</p>
                                                    </div>
                                                )}
                                            </Dropzone>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control shadow-sm" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} readOnly/>
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control shadow-sm" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} readOnly/>
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control shadow-sm" placeholder="Age" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })}/>
                                </div>
                                <div className="my-2">
                                    <label className="form-label">Conatct</label>
                                    <input type="number" className="form-control shadow-sm" placeholder="Contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })}/>
                                </div>
                                <div className="my-3">
                                    <label className="form-label">Occupation</label>
                                    <input list="Occupation" className="form-control shadow-sm" placeholder="Occupation" value={formData.occupation} onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}/>
                                    <datalist id="Occupation">
                                        <option>Student</option>
                                        <option>Full time employee</option>
                                        <option>Part time employee</option>
                                        <option>Freelancer</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="my-3">
                                    <label className="form-label">Collage/ Company Name</label>
                                    <input className="form-control shadow-sm" placeholder="Collage/ Company Name" value={formData.clgcompName} onChange={(e) => setFormData({ ...formData, clgcompName: e.target.value })}/>
                                </div>
                                <div className="my-3">
                                    <label className="form-label">Role (optional)</label>
                                    <input type="text" className="form-control shadow-sm" placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}/>
                                </div>
                                <div className="my-3">
                                    <label className="form-label">Seniority (optional)</label>
                                    <input type="text" className="form-control shadow-sm" placeholder="Role" value={formData.seniority} onChange={(e) => setFormData({ ...formData, seniority: e.target.value })}/>
                                </div>
                                <div className="my-3">
                                    <label className="form-label">Experience (optional)</label>
                                    <input type="number" className="form-control shadow-sm" placeholder="Experience" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })}/>
                                </div>

                                <div className="d-flex justify-content-between my-3">
                                    <div>
                                        <div className="fs-6">Share Profile</div>
                                        <div className="fs-6 text-secondary"> (Jobfinder will share your profile to Companies)</div>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" checked={formData.shareprofile} onChange={(e) => setFormData({ ...formData, shareprofile: e.target.value })} />
                                    </div>
                                </div>
                                <div className="my-3">
                                    <div className="d-flex justify-content-between align-items-center w-75">
                                        <label className="form-label fs-5">Skills</label>
                                        <div className="fs-6 text-secondary mr-3">example: JAVA,PYTHON</div>
                                    </div>
                                    <input type="text" className="form-control shadow-sm" placeholder="Skills" value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(',') })}/>
                                </div>
                                <button className="btn btn-outline-secondary rounded shadow-sm w-100 my-2">Post a Job</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-4">
                    <form className="form-group px-2 mt-0 mt-lg-5 mb-5 mb-lg-0" onSubmit={confirmAddress}>
                        <div className="card p-md-2 shadow-sm">
                            <div style={{ height: "60vh" }}>
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
                            <button className="btn shadow-sm w-50 my-2 mx-auto btn-color-primary">Confirm Address</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Createprofile;