import { CREATE_PROFILE, GET_PROFILE } from "../constants/actionTypes";
import * as api from "../Api";
import { toast } from 'react-toastify';

export const companyprofile = (profiles, history) => async (dispatch) => {
    try {
        const data = await api.companyprofile(profiles)
        dispatch({ type: CREATE_PROFILE, payload: data });
        history.push('/company')
        toast.success('Profile created')
    } catch ({response}) {
        toast.error(response.data.message)
    }
}

export const getprofile = (id) => async (dispatch) => {
    try {
        const data = await api.getprofile(id)
        dispatch({ type: GET_PROFILE, data });
        console.log(data)
    } catch ({response}) {
        toast.error(response.data.message)
    }
}

