import { APPLICATION} from "../constants/actionTypes";

const ApplicationReducer = (applications=[], action)=>{
    switch (action.type){
        case APPLICATION:
            return action.payload;
        default:
            return applications;
    }
};

export default ApplicationReducer;