import {GET_JOB_DETAILS} from "../constants/actionTypes";
import * as api from "../Api";

export const getdetails = (id) => async(dispatch) =>{
    try{
        const {data} = await api.getjobdetails(id);
        console.log(data)
        dispatch({type:GET_JOB_DETAILS,payload:data})
    }catch(error){
        console.log(error)
    }
}
