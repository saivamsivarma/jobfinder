import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import NavIcon from "../Assets/navbar.svg";
import Button from "./Button";
import { Link } from "react-router-dom";
/*import User from "../Assets/defaultuser.svg";*/

function Navbar(props) {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const page = props.page

    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <div className="d-flex justify-content-between w-100 align-items-center">
                    <div className="navbar-brand">
                        <img src={logo} alt="" height="40" />
                    </div>
                    {page === "landing" ? <Link to="/userlogin" class="btn btn-outline-secondary px-4 rounded-pill fw-bold d-sm-block d-lg-none">Log in</Link>
                        :  <button className="custom-toggler navbar-toggler" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                                <img src={NavIcon} alt="navicon" height="20"></img>
                            </button>
                    }
                </div>
                {page === "landing" ?
                    <div className="d-none d-lg-block  w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="fw-bold">About</div>
                            <div className="fw-bold">FAQ</div>
                            <div className="fw-bold">Contact</div>
                            <Link to="/user" className="btn btn-outline-secondary px-4 fw-bold">Log in</Link>
                            <Button class="btn btn-color-secondary px-4 fw-bold" value="Are you an employer?" />
                        </div>
                    </div>
                    : page === "userauth-login" ? <div className="d-none d-lg-block  w-100">
                        <div className="d-flex justify-content-around align-items-center">
                            <Link to="/" className="fw-bold text-decoration-none primary-text">Home</Link>
                            <Link to="/" className="fw-bold text-decoration-none primary-text">Login As Employee</Link>
                        </div>
                    </div> : <div></div>}
            </div>
        </nav>
    );
}

export default Navbar;