import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import "../../App.css"
import { useDispatch, useSelector } from "react-redux";
import alanBtn from '@alan-ai/alan-sdk-web';
import { NavLink, useHistory, withRouter } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import Icon from "../../Assets/icon.svg"
import NavIcon from '../../Assets/navbar.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Findjobs from "./Findjobs";
import Jobdetails from "./Jobdetails";
import ModalDiv from "../../Components/ModalDiv";
import { userapplications } from "../../actions/application";
import ApplicationCard from "../../Components/ApplicationCard";
import { ToastContainer } from 'react-toastify';
import Badge from "../../Components/Badge";
import { getrefer } from "../../actions/refer";
import { getjobs } from "../../actions/jobs";

const routes = [
    {
        path: "/user-page/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/user-page/findjobs",
        main: () => <Findjobs />
    },
    {
        path: "/user-page/profile",
        main: () => <Profile />
    },
    {
        path: "/user-page/job/:id",
        main: () => <Jobdetails />
    },
];

const alanKey = '367ca1dfd43f62d0fa72275a218f28952e956eca572e1d8b807a3e2338fdd0dc/stage'

function User() {
    const dashBoard = useRef(null);
    const jobs = useRef(null);
    const profile = useRef(null);
    const vlogout = useRef(null);
    const modalButton = useRef(null);
    const history = useHistory();

    let modal = true
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [modalHeader, setModalHeader] = useState(`Welcome to JobFinder`)
    const [vcommand, setVcommand] = useState('Welcome')
    const id = user?.result._id
    const formData = { email: user?.result.email }
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [newJobs, setNewJobs] = useState([])
    const [activeJob, setActiveJob] = useState(-1)

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const applications = useSelector((state) => state.applications);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getrefer(formData))
        dispatch(getjobs());
        dispatch(userapplications(id));
        let alanBtnInstance = alanBtn({
            key: alanKey,
            onConnectionStatus: function (status) {
                if (status === 'authorized') {
                    alanBtnInstance.activate();
                    alanBtnInstance.playText(`(Hello, ${user?.result.name} I am Alan your personal voice assistant. I Can help you to search ,apply job, and Track your Application and profile | Hello ${user?.result.name}, how can I Help you today)`);
                    modalButton.current.click() // eslint-disable-next-line
                }
            },
            onCommand: ({ command, data, header }) => {
                switch (command) {
                    case 'dashboard':
                        alanBtnInstance.playText(('Opening dashboard | Here is your dashboard'))
                        if (modal === true) {// eslint-disable-next-line
                            modal = false
                            modalButton.current.click()
                            dashBoard.current.click()
                        }
                        else {
                            dashBoard.current.click()
                        }
                        return;
                    case 'profile':
                        alanBtnInstance.playText(`(Opening Your Profile | Fetching your data | sure ${user?.result.name})`)
                        if (modal === true) {
                            modal = false
                            modalButton.current.click()
                            profile.current.click()
                        }
                        else {
                            profile.current.click()
                        }
                        return;
                    case ' jobs':
                        alanBtnInstance.playText(`(Opening Jobs | Here are the jobs available | sure ${user?.result.name})`)
                        if (modal === true) {
                            modal = false
                            modalButton.current.click()
                            jobs.current.click()
                        }
                        else {
                            jobs.current.click()
                        }
                        return;
                    case 'newJob':
                        if (modal === false) {
                            modalButton.current.click()
                            modal = true
                            setNewJobs(data)
                            setVcommand(command);
                        }
                        else {
                            setNewJobs(data)
                            setVcommand(command);
                        }
                        setModalHeader(header)
                        return;
                    case 'applicationData':
                        alanBtnInstance.playText('(ok. Here what I have found | fetching your Application Data | Here is your application data)')
                        setModalHeader(header)
                        if (modal === false) {
                            modal = true
                            modalButton.current.click()
                            setVcommand(command);
                        }
                        else {
                            setVcommand(command);
                        }
                        return
                    case 'highlight':
                        setActiveJob((prevActiveJob) => prevActiveJob + 1)
                        return;
                    case 'logout':
                        alanBtnInstance.playText('Have a nice day')
                        vlogout.current.click()
                        alanBtnInstance.deactivate();
                        return;
                    default:
                        return
                }
            },
        })
        // eslint-disable-next-line
    }, [modal]);
    // eslint-disable-next-line
    const refers = useSelector((state) => state.refers);
    const Availjobs = useSelector((state) => state.jobs);
    const Userprofile = JSON.parse(localStorage.getItem('userData'))
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/auth')
        setUser(null)
    }
    const modalClose = () => {
        modal = false
    }
    const Intents = ["Suggest me any jobs", "Open Profile", "Open jobs", "Full Time", "Jobs related to 'HTML'", "My Application Status", "Jobs near to 'Dehli'", "Jobs related to 'Java Development'", "Freelance Jobs"]
    return (
        <div className="container-fluid">
            <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover />
            {!user?.token ? <div className="row justify-content-center align-items-center height-max">
                <div className="col-2">
                    <div class="spinner-grow text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
                <Router>
                    <div className="row">
                        <div className="col-12 col-lg-3 col-xl-2 rounded bg-white">
                            <nav className="my-4">
                                <div className="nav__brand my-2 d-flex justify-content-between">
                                    <div className="navbar-brand">
                                        <img src={logo} alt="" height="45" />
                                    </div>
                                    <button className="custom-toggler navbar-toggler d-sm-block d-lg-none" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                        <img src={NavIcon} alt="navicon" height="20"></img>
                                    </button>
                                </div>

                                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center`} id="navbarNavDropdown">
                                    <div className="my-5 mb-3 d-block d-lg-none">
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/user-page/" className="nav__name fs-5 text-decoration-none link" onClick={handleNavCollapse}>Dashboard</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded " role="button" >
                                            <NavLink to="/user-page/findjobs" className="nav__name fs-5 text-decoration-none link" onClick={handleNavCollapse}>Jobs</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/user-page/profile" className="nav__name fs-5 text-decoration-none link" onClick={handleNavCollapse}>Profile</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/auth" className="nav__name fs-5 text-decoration-none link" onClick={logout}>Logout</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-5 mb-3 d-none d-lg-block">
                                    <div className="nav__link my-3 py-2 px-3 rounded link" role="button">
                                        <NavLink to="/user-page/" className="nav__name fs-5 text-decoration-none" ref={dashBoard}>Dashboard</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded link" role="button">
                                        <NavLink to="/user-page/findjobs" className="nav__name fs-5 text-decoration-none" ref={jobs} >Jobs</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/user-page/profile" className=" link nav__name fs-5 text-decoration-none" ref={profile}>Profile</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded link" role="button">
                                        <div className="nav__name fs-5 text-decoration-none" ref={vlogout} onClick={logout}>Logout</div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-9 col-xl-10">
                            <AnimatePresence>
                                <Switch>
                                    {routes.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            children={<route.main />}
                                        />
                                    ))}
                                </Switch>
                            </AnimatePresence>
                        </div>
                    </div>
                </Router>}
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={modalButton}>Launch modal</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-warning" id="exampleModalLabel">{modalHeader}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={modalClose}></button>
                        </div>
                        <div className="modal-body">
                            {vcommand === 'Welcome' ?
                                <div className="row gy-2" style={{ height: "50vh" }}>
                                    <div className="col-12 text-center h-25">
                                        <img src={logo} alt="" className="modal-image" />
                                    </div>
                                    <div className="col-12">
                                        <div className="fs-4 secondary-text fw-bold">Intents</div>
                                        <div className="d-inline-flex flex-row align-items-center scroll-Xmodal" id="custom_scroll_bar">
                                            {Intents.map((intent) => (
                                                <div className="mx-1 my-0" key={intent}>
                                                    <Badge value={intent} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card shadow-sm p-2 color-bg">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <div className="fw-bold">{user?.result.name}</div>
                                                    <div className="secondary-text">{user?.result.email}</div>
                                                </div>
                                                <img alt={user?.result.name.charAt(0)} src={"https://jobfinder-project.herokuapp.com/" + Userprofile?.image} className="img-fluid shadow-sm rounded-pill float-end" width="60" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card shadow-sm p-2 color-bg">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <div className="fw-bold">Jobs Available</div>
                                                    <div className="secondary-text fs-4">{Availjobs?.length}</div>
                                                </div>
                                                <img alt="icon" src={Icon} className="img-fluid" width="50"/>
                                            </div>
                                        </div>
                                    </div>
                                </div> : vcommand === 'applicationData' ? !applications.length ? <div className="row justify-content-center align-items-center height-max">
                                    <div className="col-12 text-center">
                                        <div className="text-warning">Your have No Application</div>
                                    </div>
                                </div> : <div className="row">
                                    {applications.map((application) => (
                                        <div className="col-12 col-md-6 col-lg-4" key={application._id}>
                                            <ApplicationCard application={application} />
                                        </div>
                                    ))}
                                </div> : vcommand === "newJob" ? !newJobs.length ? <div className="row justify-content-center align-items-center height-max">
                                    <div className="col-2">
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div> : <><ModalDiv datas={newJobs} activeJob={activeJob} /></> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(User);
