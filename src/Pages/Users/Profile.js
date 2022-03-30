import React from "react";
import "../../App.css";
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";
import Badge from "../../Components/Badge";
import { ToastContainer } from 'react-toastify';
import ApplicationCard from "../../Components/ApplicationCard";
function Profile() {
    const data = JSON.parse(localStorage.getItem('userData'))
    const skills = data.skills
    var newSkills = skills.split(',')
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
    const applications = useSelector((state) => state.applications);
    return (
        <motion.div className="row" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover />
            <div className="col-12 height-max">
                <div className="row">
                    <div className="col-12 col-lg-9 col-xl-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fs-2">Your Profile</div>
                            <div className="text-secondary">Edit Profile</div>
                        </div>
                        <div className="card shadow-sm p-3">
                            <div className="row gy-3">
                                <div className="col-9">
                                    <div className="fs-5 text-capitalize">{data.name}</div>
                                    <div className="fs-6 secondary-text">{data.occupation}</div>
                                </div>
                                <div className="col-3 text-center">
                                    <img src={"https://jobfinder-project.herokuapp.com/" + data.image} alt="user" className="img-fluid shadow-sm rounded-pill" width="80" />
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="fs-6 text-secondary">Email</div>
                                    <div className="fs-5 secondary-text">{data.email}</div>
                                </div>
                                <div className="col-6 col-md-3 text-md-center">
                                    <div className="fs-6 text-secondary ">Age</div>
                                    <div className="fs-5 secondary-text">{data.age}</div>
                                </div>
                                <div className="col-6 col-md-4">
                                    <div className="fs-6 text-secondary">Contact</div>
                                    <div className="fs-5 secondary-text">{data.contact}</div>
                                </div>
                                <div className="col-6 col-md-4">
                                    {data.occupation === "Student" ?
                                        <div className="fs-6 text-secondary">Collage name</div> :
                                        <div className="fs-6 text-secondary">Company name</div>
                                    }
                                    <div className="fs-5 secondary-text">{data.clgcompName}</div>
                                </div>
                                <div className="col-6 col-md-4 text-md-center">
                                    <div className="fs-6 text-secondary">Education</div>
                                    <div className="fs-5 secondary-text">{data.education}</div>
                                </div>
                                <div className="col-12">
                                    <div className="fs-6 text-secondary">Skills</div>
                                    <div className="row">
                                        {newSkills.map((skill) =>
                                            <div key={skill} className="col-4 col-md-2">
                                                <Badge value={skill} color="primary" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {data.occupation === "Student" ?
                                    <></> :
                                    <div className="col-12 col-lg-4">
                                        <div className="fs-6 text-secondary">Role</div>
                                        <div className="fs-5 secondary-text">{data.role}</div>
                                    </div>
                                }
                                {data.occupation === "Student" ?
                                    <></> :
                                    <div className="col-6 col-lg-4">
                                        <div className="fs-6 text-secondary">Experience</div>
                                        <div className="fs-5 secondary-text">{data.experience} years</div>
                                    </div>
                                }
                                {data.occupation === "Student" ?
                                    <></> :
                                    <div className="col-6 col-lg-4">
                                        <div className="fs-6 text-secondary">Level</div>
                                        <div className="fs-5 secondary-text">{data.seniority} years</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-xl-4">
                        {!applications.length ?
                            <div className="card p-4 text-center my-2">
                                No Applications
                </div>
                            :
                            <>{applications.map((application) => (
                                <div  key={application._id}>
                                <ApplicationCard application={application}/></div>
                            ))}</>
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Profile;