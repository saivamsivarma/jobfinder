import { GET_JOB_DETAILS} from "../constants/actionTypes";

const jobdetailsReducer = (jobdetails = {}, action)=>{
    switch (action.type){
        case GET_JOB_DETAILS:
            return action.payload;
        default:
            return jobdetails;
    }
};

export default jobdetailsReducer;