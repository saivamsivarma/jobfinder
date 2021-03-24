import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

import Input from "../../../Components/Input";
/*import Button from "../../Components/Button"*/
import Checkbox from "../../../Components/Checkbox";

function Login() {
    return (
        <div className="mx-auto w-100 px-lg-5">
            <form className="form-group my-4">
                <Input type="email" placeholder="Email Id" label="Email Id" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
                <Input type="password" placeholder="Password" label="Password" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <Checkbox type="checkbox" label="Remember me" labelclass="form-check-label" class="form-check-input" />
                    <div className="fw-bold fs-6 text-secondary">Forgot Password ?</div>
                </div>
            </form>
                <Link to="/dashboard" className="btn btn-color-secondary w-100" value="LogIn" >LogIn</Link>
        </div>
    );
}

export default Login;