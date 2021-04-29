import React,{useState} from "react";
import "../../../App.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import { signup,googlesignup} from "../../../actions/auth";

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

    
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const google_id = result.googleId;
        const name = result.givenName+result.familyName
        const email = result.email
        const authData = {google_id,name,email}
        console.log(authData)
        try {
            dispatch(googlesignup(authData,history))
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    return (
        <div className="mx-auto w-100 px-lg-5">
            <form className="form-group my-4" onSubmit={handleSubmit}>
                <Input name="name" type="text" placeholder="Full Name" label="Full Name"  properties="mt-3" handleChange={handleChange}/>
                <Input name="email" type="email" placeholder="Email Id" label="Email Id"  properties="mt-3" handleChange={handleChange}/>
                <Input name="password" type="password" placeholder="Password" label="Password"  properties="mt-3" handleChange={handleChange}/>
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" label="Confirm Password"  properties="mt-3" handleChange={handleChange}/>
                <button className="btn btn-color-secondary w-100 mt-3">Create account</button>
            </form>
            <div className="text-center">Or Signup with your Social account</div>
            <GoogleLogin clientId="578031199772-5pjpsc9n6t1aknaci8k10sokgmdg58v5.apps.googleusercontent.com" render={(renderProps) => (
                <button className="btn text-center btn-color-outline-primary w-100" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    Google LogIn
                </button>
            )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin" />
        </div>
    );
}

export default Signup;