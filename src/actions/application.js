import {APPLICATION} from "../constants/actionTypes";
import * as api from "../Api";

export const getCompanyapplication = (id) => async(dispatch) =>{
    try{
        console.log(id)
        const {data} = await api.getappications(id)
        console.log(data);
        dispatch({type:APPLICATION,payload:data})
    }catch(error){
        console.log(error)
    }
}