import React,{useState} from "react";
import "../../../App.css";
import { useDispatch } from 'react-redux';

import { useHistory } from "react-router-dom";
import {signincompany} from "../../../actions/auth"
import Input from "../../../Components/Input";
import Checkbox from "../../../Components/Checkbox";

const initialState = {email:'',password:''}

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(initialState);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        dispatch(signincompany(formData,history))
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    return (
        <div className="mx-auto w-100 px-lg-5">
            <form className="form-group my-4" onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email Id" label="Email Id"  properties="mt-3" handleChange={handleChange}/>
                <Input name="password" type="password" placeholder="Password" label="Password" properties="mt-3" handleChange={handleChange}/>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <Checkbox label="Remember me" />
                    <div className="fw-bold fs-6 text-secondary">Forgot Password ?</div>
                </div>
                <button className="btn btn-color-secondary w-100 mt-3 mb-4" value="LogIn" >LogIn</button>
            </form>
        </div>
    );
}

export default Login;