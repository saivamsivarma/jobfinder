import { CREATE_PROFILE,GET_PROFILE} from "../constants/actionTypes";

const profileReducer = (profiles = [], action)=>{
    switch (action.type){
        case CREATE_PROFILE:
            return [...profiles, action.payload];
        case GET_PROFILE:
            return action.payload
        default:
            return profiles;
    }
};

export default profileReducer;