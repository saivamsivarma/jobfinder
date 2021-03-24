import React, { useState, useRef } from "react";
import "../../App.css";
import Dropzone from 'react-dropzone';

function Create() {
    const [formStep, setFormStep] = useState(0)
    const completeFormStep = () =>{
        setFormStep(cur => cur +1)
    }
    const renderButton = () =>{
        if(formStep<=1){
            return (<button onClick={completeFormStep} type="button" className="btn btn-color-primary px-5 my-3">Next Step</button>)
        } else{
            return(
                <button onClick={completeFormStep} type="button" className="btn btn-color-primary px-5 my-3">Submit</button>
            )
        }
    }
    const Buttoncomponent = renderButton
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
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center align-items-center color-bg">
                <div className="col-12 col-md-7">
                    <div className="card shadow p-0 p-lg-3">
                        <form className="form-group p-2">
                            {formStep === 0 && (
                                <div className="row gy-4">
                                    <div className="fw-bold fs-3 text-center">Personal Details</div>
                                    <div className="col-12 col-md-6">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-12 col-md-6">

                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Email address</label>
                                        <input type="email" className="form-control" placeholder="name@example.com" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Mobile Number</label>
                                        <input type="number" className="form-control" placeholder="Mobile number" />
                                    </div>
                                </div>
                            )}
                            {formStep === 1 && (
                                <div className="row gy-4">
                                    <div className="fw-bold fs-3 text-center">Organization details</div>
                                    <div className="col-12">
                                        <label className="form-label">Organization name</label>
                                        <input type="text" className="form-control" placeholder="Organization name" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Organization description</label>
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                    <div className="col-6">
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
                                                        {file && (
                                                            <div>
                                                                <strong>Selected file:</strong> {file.name}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </Dropzone>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        {previewSrc ? (
                                            isPreviewAvailable ? (
                                                <div className="image-preview">
                                                    <img className="preview-image" src={previewSrc} alt="Preview" />
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
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="float-right">
                        <Buttoncomponent/>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Create;