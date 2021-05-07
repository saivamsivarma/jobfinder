import { RELATED_JOBS} from "../constants/actionTypes";

const relatedjobsReducer = (realtedjobs = [], action)=>{
    switch (action.type){
        case RELATED_JOBS:
            return action.payload;
        default:
            return realtedjobs;
    }
};

export default relatedjobsReducer;