import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import Badge from "../../Components/Badge";
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
    return (
        <motion.div className="row" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="col-12 col-lg-9 col-xl-8 color-bg height-max">
                <div className="row">
                    <div className="scroll-div-profile" >
                        <div className="col-12 mt-3 border-0">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="fs-2">Your Profile</div>
                                <div className="text-secondary">Edit Profile</div>
                            </div>
                            <div className="card shadow p-3">
                                <div className="row gy-3">
                                    <div className="col-9">
                                        <div className="fs-5">{data.name}</div>
                                        <div className="fs-6 secondary-text">{data.occupation}</div>
                                    </div>
                                    <div className="col-3 text-center">
                                        <img src={"https://jobfinder-project.herokuapp.com/" + data.image} alt="user" className="img-fluid shadow rounded-pill" width="60" />
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
                                                <div key className="col-6 col-lg-2">
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
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Profile;