import { APPLICATION,POST_APPLICATIONS} from "../constants/actionTypes";

const ApplicationReducer = (applications=[], action)=>{
    switch (action.type){
        case APPLICATION:
            return action.payload;
        case POST_APPLICATIONS:
            return [...applications, action.payload];
        default:
            return applications;
    }
};

export default ApplicationReducer;