import React, { useEffect } from "react";
import "../../App.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import Job from "../../Assets/job.svg";
import Semi from "../../Assets/semi.svg"
import Badge from "../../Components/Badge"
import Refertable from "../../Components/ReferTable";
import { getuserdata } from '../../actions/user'
import { getjobs } from "../../actions/jobs";

function Dashboard() {
    const user = JSON.parse(localStorage.getItem('profile'))
    const profile = JSON.parse(localStorage.getItem('userData'))
    const id = user?.result._id
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getuserdata(id));
        dispatch(getjobs());
    }, [id, dispatch]);

    const refers = useSelector((state) => state.refers);
    console.log(refers)
    const jobs = useSelector((state) => state.jobs);
    const pageVariants = {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        in: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            scale: 1.2
        }
    };

    const pageTransition = {
        type: "fadein",
        duration: 0.5
    };
    const Intents = ["Suggest me any jobs", "Open Profile", "Open jobs","Full Time","Jobs related to 'HTML'", "My Application Status", "Jobs near to 'your location'", "Jobs related to 'Java Development'", "Freelance Jobs"]
    return (
        <motion.div className="row align-items-start" initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover />
            <div className="col-12 col-xl-10 height-max">
                <div className="row mt-2 gy-2">
                    <div className="col-8 col-lg-8"><div className="fs-4"> Welcome! {user?.result.name}</div></div>
                    <div className="col-4 col-lg-4">{profile ? (<img alt={user?.result.name.charAt(0)} src={"https://jobfinder-project.herokuapp.com/" + profile.image} className="img-fluid shadow-sm rounded-pill float-end" width="60" />) : <div className="bg-warning text-white rounded px-3 py-2 rounded-pill shadow-sm-sm float-end">{user?.result.name.charAt(0)}</div>}</div>
                    <div className="col-12">
                        <div className="fs-4 secondary-text fw-bold">Intents</div>
                        <div className="d-inline-flex flex-row align-items-center scroll-X" id="custom_scroll_bar">
                            {Intents.map((intent) => (
                                <div className="mx-1 my-0" key={intent}>
                                    <Badge value={intent} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card shadow-sm card-bg border-0 primary-bg">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-6 text-center order-last order-md-first">
                                    <div className="mx-auto px-sm-2 px-md-0">
                                        <div className="fs-1 fw-bold text-white">Get Matched</div>
                                        <div className="fs-5 fw-bold text-white">with jobs best suited to your skills</div>
                                        <div className="d-flex justify-content-evenly my-3">
                                            <Link to="/user-page/profile" className="btn btn-color-outline-primary">View Profile</Link>
                                            <Link to="/user-page/findjobs" className="btn btn-color-primary">Find a Job</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-center p-3 mb-3 mb-md-0 order-first order-md-last">
                                    <img src={Job} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="d-flex justify-content-between">
                                <div className="px-4 py-3">
                                    <div className="fs-5 fw-bold">Jobs Available:</div>
                                    <div className="fs-1 fw-bold mt-1 ml-2 ">{jobs.length}</div>
                                    <Link to="/user-page/findjobs" className="btn btn-color-primary px-3">View All</Link>
                                </div>
                                <img src={Semi} alt="" className="align-self-end" width="70" height="75" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-8">
                        <div className="mb-5 mb-md-0">
                            {!refers.length ? <div className="card shadow-sm">
                                <div className="text-center">
                                You have no refers
                                </div>
                                </div> :
                                <div className="card shadow-sm px-2 py-1">
                                    <div className="row">
                                        <div className="col-4 secondary-text d-none d-lg-block">Company</div>
                                        <div className="col-4 secondary-text d-none d-lg-block">Refer by</div>
                                        <div className="col-4 secondary-text d-none d-lg-block">Post</div>
                                        <div className="col-12">
                                            {refers.map((refer) => (
                                                <Refertable refer={refer} key={refer._id} />
                                            ))}
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Dashboard;