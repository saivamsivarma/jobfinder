import { DATA} from "../constants/actionTypes";

const UserDataReducer = (state={userData:null}, action)=>{
    switch (action.type){
        case DATA:
            localStorage.setItem('userData', JSON.stringify({ ...action?.data }));

            return { ...state, userData: action.data, loading: false, errors: null };
        default:
            return state;
    }
};

export default UserDataReducer;