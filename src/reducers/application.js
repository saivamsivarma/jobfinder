import { APPLICATION,POST_APPLICATIONS,GET_APPLICATION} from "../constants/actionTypes";

const ApplicationReducer = (applications=[], action)=>{
    switch (action.type){
        case APPLICATION:
            return action.payload;
        case POST_APPLICATIONS:
            return [...applications, action.payload];
        case GET_APPLICATION:
            return action.payload;
        default:
            return applications;
    }
};

export default ApplicationReducer;