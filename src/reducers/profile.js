import { CREATE_PROFILE,GET_PROFILE} from "../constants/actionTypes";

const profileReducer = (profiles = {profileData:null}, action)=>{
    switch (action.type){
        case CREATE_PROFILE:
            localStorage.setItem('company', JSON.stringify({ ...action?.payload }));
            return [...profiles, action.payload];
        case GET_PROFILE:
            localStorage.setItem('company', JSON.stringify({ ...action?.data }));
            return action.payload
        default:
            return profiles;
    }
};

export default profileReducer;