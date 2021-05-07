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
import Jobs from "./Jobs";
import Users from "./Users";
import Createjob from "./Createjob";
import { companyjob } from '../../actions/jobs';

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
    }
];

const alanKey = '367ca1dfd43f62d0fa72275a218f28952e956eca572e1d8b807a3e2338fdd0dc/stage'

function Company() {
    const dashBoard = useRef(null);
    const jobs = useRef(null);
    const profile = useRef(null);
    const vlogout = useRef(null)
    const history = useHistory();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const dispatch = useDispatch()
    const id = user.result._id
    useEffect(() => {
        dispatch(companyjob(id));
        let alanBtnInstance = alanBtn({
            key: alanKey,
            onCommand: ({ command, data }) => {
                console.log(command)
                switch (command) {
                    case 'dashboard':
                        alanBtnInstance.playText('Opening dashboard')
                        dashBoard.current.click()
                        return;
                    case 'profile':
                        alanBtnInstance.playText('Opening Your Profile')
                        profile.current.click()
                        return;
                    case ' jobs':
                        alanBtnInstance.playText('Opening Your Profile')
                        jobs.current.click()
                        return;
                    case 'logout':
                        alanBtnInstance.playText('Have a nice day')
                        vlogout.current.click()
                        alanBtnInstance.deactivate();
                        return;
                    default:
                        return
                }
                /*
            onConnectionStatus: function(status) {
                if (status === 'authorized') {
                    alanBtnInstance.activate();
                    alanBtnInstance.playText('Hey, this is Alan your personal voice assistant');
                }*/
            },
        })
        // eslint-disable-next-line
    }, []);
    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        history.push('/companiesauth')
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
                                            <NavLink to="/company/" className="nav__name link link fs-5 text-decoration-none" ref={dashBoard} onClick={handleNavCollapse}>Dashboard</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/company/jobs" className="nav__name link link fs-5 text-decoration-none " ref={jobs} onClick={handleNavCollapse}>Jobs</NavLink>
                                        </div>
                                        <div className="nav__link my-3 py-2 px-3 rounded" role="button" >
                                            <NavLink to="/company/users" className="nav__name link link fs-5 text-decoration-none" ref={profile} onClick={handleNavCollapse}>User</NavLink>
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
        </div>
    );
}

export default withRouter(Company);
