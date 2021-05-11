import React, { useState } from "react";
import "../../../App.css";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signin, googlelogin } from "../../../actions/auth"
import Input from "../../../Components/Input";
import Checkbox from "../../../Components/Checkbox";

const initialState = { email: '', password: '' }

function Login() {
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(formData);
        dispatch(signin(formData, history))
        setTimeout(()=>{
            setLoading(false)
        },5000)
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const googleSuccess = async (res) => {
        setLoading(true)
        const result = res?.profileObj;
        const email = result.email
        const authData = { email }
        console.log(authData)
        try {
            dispatch(googlelogin(authData, history))
        } catch (error) {
            console.log(error);
        }
    };

    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
    
    return (
        <div className="w-100 px-lg-5">
            <ToastContainer position="bottom-center"autoClose={5000} hideProgressBar newestOnTop closeOnClickrtl pauseOnFocusLoss draggable pauseOnHover/>
            <form className="form-group my-4" onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email Id" label="Email Id" properties="mt-3" handleChange={handleChange} />
                <Input name="password" type="password" placeholder="Password" label="Password" properties="mt-3" handleChange={handleChange} />
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <Checkbox label="Remember me" />
                    <div className="fw-bold fs-6 text-secondary">Forgot Password ?</div>
                </div>
                {loading === false ? <button className="btn btn-color-secondary w-100 mt-2 mb-3" value="LogIn">LogIn</button> : <button className="btn btn-color-secondary w-100 mt-2 mb-3" type="button" disabled>Loading...</button>}
            </form>
            <div className="d-flex justify-content-between align-items-center my-4">
                <div className="line_break"></div><div className="fs-6">Or login with</div><div className="line_break"></div>
            </div>
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

export default Login;