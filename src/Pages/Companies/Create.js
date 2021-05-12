import React, { useState, useRef } from "react";
import "../../App.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Input from "../../Components/Input";
import ReadOnly from "../../Components/ReadOnly";
import Dropzone from 'react-dropzone';

import { companyprofile } from "../../actions/profile";

function Create() {
    const user = JSON.parse(localStorage.getItem('profile'))
    const [formData, setFormData] = useState({ _id:'',contact: '', size: '', companyname: '', description: '',name:''});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const [file, setFile] = useState(null);
    const [previewSrc, setPreviewSrc] = useState('');

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
        setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
        dropRef.current.style.border = '2px dashed #FFB200';
    };

    const updateBorder = (dragState) => {
        if (dragState === 'over') {
            dropRef.current.style.border = '2px solid #FFB200';
        } else if (dragState === 'leave') {
            dropRef.current.style.border = '2px dashed #FFB200';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { companyname, contact, size, description} = formData
            const name = user?.result.name;
            const _id = user?.result._id;
            const profiles = new FormData();
            profiles.append('_id',_id)
            profiles.append('name',name)
            profiles.append('companyname', companyname);
            profiles.append('contact', contact);
            profiles.append('size', size);
            profiles.append('description', description)
            profiles.append('logo', file)
            dispatch(companyprofile(profiles,history));
        } catch (error) {
            console.log(error.message)
        }
        setTimeout(()=>{
            setLoading(false)
        },9000)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center align-items-center color-bg height-max">
                <div className="col-12 col-md-8">
                    <div className="card shadow p-2 p-lg-3">
                        <form className="form-group p-2" onSubmit={handleSubmit}>
                            <div className="row gy-4">
                                <div className="fw-bold fs-3 text-center">Personal Details</div>
                                <div className="col-12 col-md-4">
                                    <ReadOnly type="text" placeholder="First Name" label="First Name" value={user?.result.name} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <ReadOnly type="email" placeholder="name@example.com" label="Email address" value={user?.result.email} />
                                </div>
                                <div className="col-12 col-md-4">
                                    <Input name="contact" type="number" placeholder="Mobile number" label="Mobile Number" handleChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <div className="fw-bold fs-3 text-center">Organization details</div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Input name="companyname" type="text" placeholder="Organization name" label="Organization name" handleChange={handleChange} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Input name="size" type="number" placeholder="Organization Size" label="Organization size" handleChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Organization description</label>
                                    <textarea name="description" className="form-control" rows="5" onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <label className="form-label">Organization Logo <span className="secondary-text">(Recommended)</span></label>
                                    <div className="upload-section text-center p-3 rounded">
                                        <Dropzone
                                            onDrop={onDrop}
                                            onDragEnter={() => updateBorder('over')}
                                            onDragLeave={() => updateBorder('leave')}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                                    <input {...getInputProps()} />
                                                    <p className="click-enable secondary-text my-auto">Upload Logo</p>
                                                </div>
                                            )}
                                        </Dropzone>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5">
                                    {previewSrc ? (
                                        isPreviewAvailable ? (
                                            <div className="image-preview text-center">
                                                <img className="preview-image" src={previewSrc} alt="Preview" width="200" height="200" />
                                            </div>
                                        ) : (
                                            <div className="preview-message">
                                                <p>No preview available for this file</p>
                                            </div>
                                        )
                                    ) : (
                                        <div className="preview-message">
                                            <p>Image preview will be shown here after selection</p>
                                        </div>
                                    )}
                                </div>
                                <div className="secondary-text fs-6">Max file size: 1Mb and max resolution: 500px x 500px. File type: jpeg, jpg, png</div>
                                <div className="col-12 text-center">
                                {loading === false ? <button type="submit" className="btn btn-color-primary px-5 my-3">Create Profile</button> : <button className="btn btn-color-secondary px-5 my-3" type="button" disabled>Loading...</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Create;