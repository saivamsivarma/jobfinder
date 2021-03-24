import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";

import Input from "../../../Components/Input";

function Signup() {
    return (
        <div className="mx-auto w-100 px-lg-5">
            <form className="form-group my-4">
                <Input type="text" placeholder="Full Name" label="Full Name" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
                <Input type="email" placeholder="Email Id" label="Email Id" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
                <Input type="password" placeholder="Password" label="Password" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
                <Input type="password" placeholder="Confirm Password" label="Confirm Password" labelclass="form-label" class="form-control shadow-sm" properties="mt-3" />
            </form>
            <Link to="/user-createprofile" className="btn btn-color-secondary w-100 p">Create account</Link>
        </div>
    );
}

export default Signup;