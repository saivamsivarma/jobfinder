import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import "../../App.css"
import { useDispatch } from "react-redux";
import alanBtn from '@alan-ai/alan-sdk-web';
import { NavLink, useHistory, withRouter } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import NavIcon from '../../Assets/navbar.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Findjobs from "./Findjobs";
import Jobdetails from "./Jobdetails";
import ModalDiv from "../../Components/ModalDiv";

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

    let modal = false
    const [modalHeader,setModalHeader] = useState('Welcome to JobFinder')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [newJobs, setNewJobs] = useState([])
    const [activeJob, setActiveJob] = useState(-1)

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const dispatch = useDispatch()
    useEffect(() => {
        let alanBtnInstance = alanBtn({
            key: alanKey,
            onConnectionStatus: function (status) {
                if (status === 'authorized') {
                    //alanBtnInstance.activate();
                    //alanBtnInstance.playText(`Hey, ${user?.result.name} this is Alan your personal voice assistant`);
                    //modalButton.current.click() // eslint-disable-next-line
                    modal = true // eslint-disable-next-line
                }
            },
            onCommand: ({ command, data,header }) => {
                console.log(command)
                switch (command) {
                    case 'dashboard':
                        alanBtnInstance.playText(('Opening dashboard || Here is your dashboard'))
                        if (modal === true) {
                            modal = false
                            modalButton.current.click()
                            dashBoard.current.click()
                        }
                        else {
                            dashBoard.current.click()
                        }
                        return;
                    case 'profile':
                        alanBtnInstance.playText('Opening Your Profile')
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
                        alanBtnInstance.playText('Opening Your Profile')
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
                        setModalHeader(header)
                        if(modal === false){
                            modal = true
                            modalButton.current.click()
                            setNewJobs([data])
                        }
                        else{
                            setNewJobs([data])
                        }
                        return;
                    case 'highlight':
                        setActiveJob((prevActiveJob) => prevActiveJob + 1)
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
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/auth')
        setUser(null)
    }
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
                                            <NavLink to="/user-page/" className="nav__name fs-5 text-decoration-none" onClick={handleNavCollapse}>Dashboard</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/user-page/findjobs" className="nav__name fs-5 text-decoration-none" onClick={handleNavCollapse}>Jobs</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/user-page/profile" className="nav__name fs-5 text-decoration-none" onClick={handleNavCollapse}>Profile</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/auth" className="nav__name fs-5 text-decoration-none" onClick={logout}>Logout</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-5 mb-3 d-none d-lg-block">
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/user-page/" className="nav__name fs-5 text-decoration-none" ref={dashBoard}>Dashboard</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/user-page/findjobs" className="nav__name fs-5 text-decoration-none" ref={jobs} >Jobs</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                                        <NavLink to="/user-page/profile" className="nav__name fs-5 text-decoration-none" ref={profile}>Profile</NavLink>
                                    </div>
                                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
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
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal " ref={modalButton}>Launch demo modal</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content color-bg">
                        <div className="modal-header">
                            <h5 className="modal-title primary-text" id="exampleModalLabel">{modalHeader}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {!newJobs.length ? <div className="row justify-content-center align-items-center" style={{ height: "50vh" }}>
                                <div className="col-12 col-lg-4 text-center">
                                    <img src={logo} alt="" className="modal-image"/>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <div className="card"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                : <><ModalDiv datas={newJobs} activeJob={activeJob} /></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(User);
