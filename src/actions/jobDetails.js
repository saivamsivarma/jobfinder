import {GET_JOB_DETAILS} from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';

export const getdetails = (id) => async(dispatch) =>{
    try{
        const {data} = await api.getjobdetails(id);
        console.log(data)
        dispatch({type:GET_JOB_DETAILS,payload:data})
    }catch({response}){
        toast.error(response.data.message)
    }
}
