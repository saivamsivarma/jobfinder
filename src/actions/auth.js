import  { AUTH } from "../constants/actionTypes";
import * as api from "../Api";

export  const signin = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signin(formData)

        dispatch({type:AUTH,data});
        history.push('/dashboard');
    } catch(error){
        console.log(error)
    }
}

export const signup = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signup(formData)
        dispatch({type:AUTH,data})
        history.push('/createprofile');
    } catch(error){
        console.log(error)
    }
}

export const googlesignup= (authData,history) => async(dispatch) =>{
    try{
        const {data} = await api.googlesignup(authData)
        dispatch({type:AUTH,data})
        history.push('/createprofile');
    }catch(error){
        console.log(error.message)
    }
}

export const googlelogin= (authData,history) => async(dispatch) =>{
    try{
        const {data} = await api.googlelogin(authData)
        dispatch({type:AUTH,data})
        history.push('/dashboard');
    }catch(error){
        console.log(error.message)
    }
}

export const signupcompany = (formData,history) => async(dispatch) =>{
    try{
        const {data} = await api.signup(formData)
        dispatch({type:AUTH,data})
        history.push('/company-create');
    } catch(error){
        console.log(error)
    }
}

export const signincompany = (formData,history) => async(dispatch)=>{
    try{
        const {data} = await api.signin(formData)
        dispatch({type:AUTH,data});
        history.push('/dashboard-company');
    }catch(err){
        console.log(err)
    }
}