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
import Jobs from "./Jobs";
import Users from "./Users";
import Createjob from "./Createjob";
import Applicationdetails from "./Applicationdetails"
import { companyjob } from '../../actions/jobs';
import {getprofile} from '../../actions/profile';
import Badge from "../../Components/Badge";
import { getusers } from '../../actions/user';
import Jobcard from "../../Components/Jobcard";
import { ToastContainer } from 'react-toastify';
import Modaluser from '../../Components/Modaluser';

const routes = [
    {
        path: "/company/",
        exact: true,
        main: () => <Dashboard />
    },
    {
        path: "/company/jobs",
        main: () => <Jobs />
    },
    {
        path: "/company/users",
        main: () => <Users />
    },
    {
        path: "/company/create_job",
        main: () => <Createjob />
    },
    {
        path: "/company/job/:id",
        main: () => <Applicationdetails />
    }
];

const alanKey = '367ca1dfd43f62d0fa72275a218f28952e956eca572e1d8b807a3e2338fdd0dc/stage'

function Company() {
    const dashBoard = useRef(null);
    const jobs = useRef(null);
    const users = useRef(null);
    const vlogout = useRef(null)
    const history = useHistory();
    const modalButton = useRef(null);

    let modal = true
    const [modalHeader, setModalHeader] = useState(`Welcome to JobFinder`)
    const [vcommand, setVcommand] = useState('Welcome')
    const [newUsers, setNewUsers] = useState([])
    const [activeUser, setActiveUser] = useState(-1)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const dispatch = useDispatch()
    const id = user.result._id
    useEffect(() => {
        dispatch(getusers());
        dispatch(companyjob(id));
        dispatch(getprofile(id))
        let alanBtnInstance = alanBtn({
            key: alanKey,
            onConnectionStatus: function (status) {
                if (status === 'authorized') {
                    alanBtnInstance.activate();
                    alanBtnInstance.playText(`Hey,${user?.result.name} I am Alan your personal voice assistant. I Can help you to search user, manage your jobs`);
                    modalButton.current.click()
                }
            },
            onCommand: ({ command, data, header }) => {
                switch (command) {
                    case 'dashboard':
                        if (modal === true) {// eslint-disable-next-line
                            modal = false
                            modalButton.current.click()
                            alanBtnInstance.playText('(Ok. Fetching data required for the dashboard | Here is your dashboard)')
                            dashBoard.current.click()
                        } else {
                            alanBtnInstance.playText('Ok. Fetching data required to dashboard')
                            dashBoard.current.click()
                        }
                        return;
                    case 'users':
                        alanBtnInstance.playText('(Ok. Getting data Of all the Users | Here are the User available)')
                        if (modal === true) {
                            modal = false
                            modalButton.current.click()
                            users.current.click()
                        } else {
                            users.current.click()
                        }
                        return;
                    case 'jobs':
                        alanBtnInstance.playText('Ok. Getting the Jobs you have created')
                        if (modal === true) {// eslint-disable-next-line
                            modal = false
                            modalButton.current.click()
                            jobs.current.click()
                        } else {
                            jobs.current.click()
                        }
                        return;
                    case 'sendUsers':
                        if (modal === false) {
                            modal = true
                            modalButton.current.click()
                            setNewUsers(data)
                        } else {
                            setNewUsers(data)
                        }
                        setModalHeader(header)
                        setVcommand(command)
                        return
                    case 'yourJobs':
                        alanBtnInstance.playText('Ok. Getting the Data of the Jobs you have created')
                        if (modal === false) {// eslint-disable-next-line
                            modal = true
                            modalButton.current.click()
                            setModalHeader(header)
                            setVcommand(command)
                        } else {
                            setModalHeader(header)
                            setVcommand(command)
                        }
                        return
                    case 'bottomborder':
                        setActiveUser((prevActiveJob) => prevActiveJob + 1)
                        return
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
    const allusers = useSelector((state) => state.users);
    const companyjobs = useSelector((state) => state.jobs);
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/companiesauth')
        setUser(null)
    }
    const modalClose = () => {
        modal = true
    }
    const Intents = ["Suggest me any Users", "Open Users", "Open My jobs", "User with java as skill"]
    return (
        <div className="container-fluid">
            {!user?.token ? <div className="row justify-content-center align-items-center height-max">
                <div className="col-2">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div> :
                <Router>
                    <div className="row">
                        <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover />
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
                                            <NavLink to="/company/" className="nav__name link fs-5 text-decoration-none" ref={dashBoard} onClick={handleNavCollapse}>Dashboard</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/company/jobs" className="nav__name link fs-5 text-decoration-none " ref={jobs} onClick={handleNavCollapse}>Jobs</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/company/users" className="nav__name link fs-5 text-decoration-none" ref={users} onClick={handleNavCollapse}>User</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <div className="nav__name link fs-5 link text-decoration-none" ref={vlogout} onClick={logout}>Logout</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-5 mb-3 d-none d-lg-block">
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/company/" className="nav__name link fs-5 text-decoration-none">Dashboard</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/company/jobs" className="nav__name link fs-5 text-decoration-none ">Jobs</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/company/users" className="nav__name link fs-5 text-decoration-none">Users</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <div className="nav__name link fs-5 text-decoration-none" onClick={logout}>Logout</div>
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
                                <div className="row gy-0" style={{ height: "50vh" }}>
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
                                            <div className="fw-bold">{user?.result.name}</div>
                                            <div className="secondary-text">{user?.result.email}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card shadow-sm p-2 color-bg">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <div className="fw-bold">users Available</div>
                                                    <div className="secondary-text fs-4">{allusers?.length}</div>
                                                </div>
                                                <img alt="icon" src={Icon} className="img-fluid" width="50" height="40" />
                                            </div>
                                        </div>
                                    </div>
                                </div> : vcommand === 'yourJobs' ? !companyjobs.length ? <div className="row justify-content-center align-items-center height-max">
                                    <div className="col-12 text-center">
                                        <div className="text-warning">Your have No Jobs. Go to Jobs and create one</div>
                                    </div>
                                </div> : <div className="row">
                                    {companyjobs.map((companyjob) => (
                                        <div className="col-12 col-md-6 col-lg-4" key={companyjob._id}>
                                            <Jobcard job={companyjob} />
                                        </div>
                                    ))}
                                </div> : vcommand === "sendUsers" ? !newUsers.length ? <div className="row justify-content-center align-items-center height-max">
                                    <div className="col-2">
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div> : <><Modaluser datas={newUsers} activeUser={activeUser} /></> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Company);
