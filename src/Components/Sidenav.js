import React from "react";
import "../App.css"
import { NavLink, withRouter } from "react-router-dom";
import logo from "../Assets/logo.svg";

function Sidenav() {
    return (
        <nav className="my-4">
            <div className="nav__brand my-2">
                <img src={logo} alt="" height="45" />
            </div>
            <div>
                <div className="my-5 mb-3">
                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                        <NavLink to="/dashboard" activeClassName='active' className="nav__name fs-5 text-decoration-none">Dashboard</NavLink>
                    </div>
                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                        <NavLink to="/findjobs" activeClassName='active' className="nav__name fs-5 text-decoration-none " >Find Jobs</NavLink>
                    </div>
                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                        <NavLink to="/profile" activeClassName='active' className="nav__name fs-5 text-decoration-none " >Profile</NavLink>
                    </div>
                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                    <NavLink to="/rewards" activeClassName='active' className="nav__name fs-5 text-decoration-none " >Rewards</NavLink>
                    </div>
                    <div className="nav__link my-3 py-2 px-3 rounded" role="button">
                    <NavLink to="/settings" activeClassName='active' className="nav__name fs-5 text-decoration-none " >Settings</NavLink>
                    </div>
                </div>
            </div>
            <div className="card shadow p-2 primary-bg">
                <div className="fs-5 text-white fw-bold">Get Notify</div>
                <div className="text-white text-xs my-2">Click on Subscribe button to receive an email when a new job is posted.</div>
                <button className="btn btn-color-primary">Subscribe</button>
            </div>
        </nav>
    );
}

export default withRouter(Sidenav);