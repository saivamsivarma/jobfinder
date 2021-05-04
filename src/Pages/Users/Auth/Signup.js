import React,{useState} from "react";
import "../../../App.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signup} from "../../../actions/auth";

import Input from "../../../Components/Input";

const initialState = {name:'',email:'',password:'',confirmPassword:'',role:'user'}
function Signup() {
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(signup(formData,history));
        console.log(formData)
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    return (
        <div className="mx-auto w-100 px-lg-5">
            <ToastContainer position="top-center"autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover/>
            <form className="form-group my-4" onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Full Name" label="Full Name"  properties="mt-3" handleChange={handleChange}/>
                <Input name="email" type="email" placeholder="Email Id" label="Email Id"  properties="mt-3" handleChange={handleChange}/>
                <Input name="password" type="password" placeholder="Password" label="Password"  properties="mt-3" handleChange={handleChange}/>
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" label="Confirm Password"  properties="mt-3" handleChange={handleChange}/>
                <button className="btn btn-color-secondary w-100 mt-3">Create account</button>
            </form>
        </div>
    );
}

export default Signup;