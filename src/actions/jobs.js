import {CREATE_JOB,COMPANY_JOBS,GET_JOBS,GET_JOB_DETAILS, RELATED_JOBS} from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';
export const postjob = (jobData,history) =>async(dispatch) =>{
    try{
        const {data} = await api.postjob(jobData)
        console.log(data)
        dispatch({type:CREATE_JOB,payload:data});
        history.push('/company/jobs');
    }catch({response}){
        toast.error(response.data.message)
    }
}

export const companyjob = (id) => async(dispatch) =>{
    try{
        const {data} = await api.companyjobs(id);
        dispatch({ type:COMPANY_JOBS , payload: data });
        console.log(data)
    }catch({response}){
        toast.error(response.data.message)
    }
}

export const getjobdetails = (id) => async(dispatch) =>{
    try{
        const {data} = await api.getjobdetails(id);
        console.log(data)
        dispatch({type:GET_JOB_DETAILS,payload:data})
    }catch({response}){
        toast.error(response.data.message)
    }
}

export const getjobs = () => async (dispatch) => {
    try {
      const { data } = await api.getjobs();
  
      dispatch({ type: GET_JOBS, payload: data });
    } catch ({response}) {
      console.log(response.data.message);
    }
  };

  export const relatedJobs = (value) =>async(dispatch) =>{
    try{
        const {data} = await api.relatedjobs(value)
        dispatch({type:RELATED_JOBS,payload:data});
    }catch({response}){
        toast.error(response.data.message)
    }
}