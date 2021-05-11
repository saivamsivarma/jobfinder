import {GET_REFER, REFER_USER} from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';

export const referUser = (referData) => async(dispatch) =>{
    try{
        const {data} = await api.referUser(referData)
        dispatch({type:REFER_USER,payload:data})
        toast.success('Reference Successfully')
    }catch({response}){
        toast.error(response.data.message)
    }
}

export const getrefer = (formData) => async(dispatch) =>{
    try{
        const {data} = await api.getrefer(formData)
        dispatch({type:GET_REFER,payload:data})
    }catch({response}){
        toast.error(response.data.message)
    }
}