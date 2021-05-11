import { REFER_USER,GET_REFER} from "../constants/actionTypes";

const ReferReducer = (refers=[], action)=>{
    switch (action.type){
        case REFER_USER:
            return [...refers, action.payload];
        case GET_REFER:
            return action.payload;
        default:
            return refers;
    }
};

export default ReferReducer;