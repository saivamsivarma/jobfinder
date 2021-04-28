import {GET_USERS,CREATE_PROFILE_USER} from "../constants/actionTypes";
import * as api from "../Api";

export const getusers = () => async (dispatch) => {
    try {
      const { data } = await api.getusers();
  
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const userprofile = (formData,history) => async(dispatch)=>{
    try{
      const {data} = await api.userprofile(formData);
      dispatch({type:CREATE_PROFILE_USER,payload:data})
      history.push('/dashboard')
    }catch(err){
      console.log(err.message)
    }
  }