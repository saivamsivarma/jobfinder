import  { AUTH } from "../constants/actionTypes";

import * as api from "../Api";
import { toast } from 'react-toastify';

export  const signin = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signin(formData)

        dispatch({type:AUTH,data});
        console.log(data)
        history.push('/user-page');
        toast.success('Login Success')
    } catch({response}){
        toast.error(response)
    }
}

export const signup = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signup(formData)
        dispatch({type:AUTH,data})
        history.push('/createprofile');
        toast.success("Account Successful Created")
    } catch({response}){
        toast.error(response)
    }
}

export const googlelogin= (authData,history) => async(dispatch) =>{
    try{
        const {data} = await api.googlelogin(authData)
        dispatch({type:AUTH,data})
        history.push('/user-page');
        toast.success('Login Success')
    }catch({response}){
        toast.error(response)
    }
}

export const signupcompany = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signup(formData)
        dispatch({type:AUTH,data})
        history.push('/company-create');
        toast.success("sign up successful completed")
    } catch({response}){
        toast.error(response)
    }
}

export const signincompany = (formData,history) => async(dispatch)=>{
    try{
        const {data} = await api.signincompany(formData)
        dispatch({type:AUTH,data});
        history.push('/company');
        toast.success('Login Success')
    }catch({response}){
        toast.error(response)
    }
}