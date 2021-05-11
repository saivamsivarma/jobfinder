import {GET_USERS,CREATE_PROFILE_USER,DATA} from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';
export const userprofile = (profile,history) => async(dispatch)=>{
  try{
    const {data} = await api.userprofile(profile);
    dispatch({type:CREATE_PROFILE_USER,payload:data})
    history.push('/user-page/')
    toast.success('Profile Created')
  }catch({response}){
    toast.error(response.data.message)
  }
}

export const getusers = () => async (dispatch) => {
    try {
      const { data } = await api.getusers();
  
      dispatch({ type: GET_USERS, payload: data });
    } catch ({response}) {
      toast.error(response.data.message);
    }
  };

  export const getuserdata = (id) => async(dispatch)=>{
    try{
      const {data} = await api.getuserdata(id);
      dispatch({type:DATA,data})
    }catch({response}){
      toast.error(response.data.message)
    }
  }
