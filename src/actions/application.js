import {APPLICATION, POST_APPLICATIONS} from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';

export const getCompanyapplication = (id) => async(dispatch) =>{
    try{
        console.log(id)
        const {data} = await api.getapplications(id)
        console.log(data);
        dispatch({type:APPLICATION,payload:data})
    }catch({response}){
        toast.error(response.data.message)
    }
}

export const postapplication = (formData) => async(dispatch) =>{
    try{
        console.log(formData)
        const {data} = await api.postapplication(formData)
        dispatch({type:POST_APPLICATIONS,payload:data})
    }catch({response}){
        toast.error(response.data.message)
    }
}