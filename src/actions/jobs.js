import {CREATE_JOB,COMPANY_JOBS} from "../constants/actionTypes";
import * as api from "../Api";

export const postjob = (jobData,history) =>async(dispatch) =>{
    try{
        const {data} = await api.postjob(jobData)
        dispatch({type:CREATE_JOB,payload:data});
        history.push('/jobs');
    }catch(error){
        console.log(error)
    }
}

export const companyjob = (id) => async(dispatch) =>{
    try{
        const {data} = await api.companyjobs(id);
        dispatch({ type:COMPANY_JOBS , payload: data });
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
