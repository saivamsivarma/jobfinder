import React,{useState}  from "react";
import "../../../App.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { signupcompany} from "../../../actions/auth"

import Input from "../../../Components/Input";

const initialState = {name:'',email:'',password:'',confirmPassword:'',role:'employer'}

function Signup() {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        setLoading(true);
        e.preventDefault();
        dispatch(signupcompany(formData,history));
        setTimeout(()=>{
            setLoading(false)
        },9000)
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
    };
    
    return (
        <div className="mx-auto w-100 px-lg-5">
            <form className="form-group my-4" onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Full Name" label="Full Name"   properties="mt-3" handleChange={handleChange}/>
                <Input name="email" type="email" placeholder="Email Id" label="Email Id"   properties="mt-3" handleChange={handleChange}/>
                <Input name="password" type="password" placeholder="Password" label="Password"   properties="mt-3" handleChange={handleChange}/>
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" label="Confirm Password"   properties="mt-3" handleChange={handleChange}/>
                {loading === false ? <button className="btn btn-color-secondary w-100 my-4">Sign up</button> : <button className="btn btn-color-secondary w-100 my-4" type="button" disabled>Loading...</button>}
            </form>
        </div>
    );
}

export default Signup;