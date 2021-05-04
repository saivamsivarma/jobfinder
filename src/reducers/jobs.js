import { CREATE_JOB,COMPANY_JOBS,GET_JOBS, RELATED_JOBS} from "../constants/actionTypes";

const jobReducer = (jobs = [], action)=>{
    switch (action.type){
        case CREATE_JOB:
            return [...jobs, action.payload];
        case COMPANY_JOBS:
            return action.payload;
        case GET_JOBS:
            return action.payload;
        case RELATED_JOBS:
            return action.payload;
        default:
            return jobs;
    }
};

export default jobReducer;