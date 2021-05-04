import React, { useState } from "react";
import "../App.css"
import { useDispatch } from "react-redux";

import { NavLink, withRouter, useHistory } from "react-router-dom";
import logo from "../Assets/logo.svg";
import NavIcon from '../Assets/navbar.svg';

function Sidenav(props) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    console.log(user)

    const page = props.page
    const history = useHistory();
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/')
        setUser(null)
    }
    return (
        <nav className="my-4">
            <div className="nav__brand my-2 d-flex justify-content-between">
                <div className="navbar-brand">
                    <img src={logo} alt="" height="45" />
                </div>
                <button className="custom-toggler navbar-toggler d-sm-block d-lg-none" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <img src={NavIcon} alt="navicon" height="20"></img>
                </button>
            </div>
            {page === "user" ? <>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center d-sm-block d-lg-none`} id="navbarNavDropdown">
                    <div className="my-5 mb-3">
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/dashboard" activeClassName='active' className="nav__name fs-5 text-decoration-none">Dashboard</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/findjobs" activeClassName='active' className="nav__name fs-5 text-decoration-none ">Jobs</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/profile" activeClassName='active' className="nav__name fs-5 text-decoration-none">Profile</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/auth" activeClassName='active' className="nav__name fs-5 text-decoration-none" onClick={logout}>Logout</NavLink>
                        </div>
                    </div>
                </div>
                <div className="navbar-collapse justify-content-center d-none d-lg-block">
                    <div className="my-5 mb-3">
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/dashboard" activeClassName='active' className="nav__name fs-5 text-decoration-none">Dashboard</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/findjobs" activeClassName='active' className="nav__name fs-5 text-decoration-none ">Jobs</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/profile" activeClassName='active' className="nav__name fs-5 text-decoration-none">Profile</NavLink>
                        </div>
                        <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                            <NavLink to="/auth" activeClassName='active' className="nav__name fs-5 text-decoration-none" onClick={logout}>Logout</NavLink>
                        </div>
                    </div>
                </div>
                <div className="card shadow p-2 primary-bg mt-5 d-none d-lg-block">
                    <div className="fs-5 text-white fw-bold">Get Notify</div>
                    <div className="text-white text-xs my-2">Click on Subscribe button to receive an email when a new job is posted.</div>
                    <button className="btn btn-color-primary w-100">Subscribe</button>
                </div>
            </> :
                <>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-center d-sm-block d-lg-none`} id="navbarNavDropdown">
                        <div className="my-5">
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/dashboard-company" activeClassName='active' className="nav__name fs-5 text-decoration-none">Dashboard</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/jobs" activeClassName='active' className="nav__name fs-5 text-decoration-none ">Jobs</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/users" activeClassName='active' className="nav__name fs-5 text-decoration-none">Users</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/companiesauth" activeClassName='active' className="nav__name fs-5 text-decoration-none" onClick={logout}>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-collapse justify-content-center d-none d-lg-block" id="navbarNavDropdown">
                        <div className="my-5">
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/dashboard-company" activeClassName='active' className="nav__name fs-5 text-decoration-none">Dashboard</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/jobs" activeClassName='active' className="nav__name fs-5 text-decoration-none ">Jobs</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/users" activeClassName='active' className="nav__name fs-5 text-decoration-none">Users</NavLink>
                            </div>
                            <div className="nav__link my-3 py-3 px-3 rounded" role="button">
                                <NavLink to="/companiesauth" activeClassName='active' className="nav__name fs-5 text-decoration-none" onClick={logout}>Logout</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow p-2 primary-bg d-none d-lg-block">
                        <div className="fs-5 text-white fw-bold">Alert</div>
                        <div className="text-white text-xs my-2">Your company profile will be verify by the jobfinder while your posting a job.</div>
                        <button className="btn btn-color-primary w-100">Edit Profile</button>
                    </div>
                </>}
        </nav>
    );
}

export default withRouter(Sidenav);