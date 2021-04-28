import { CREATE_PROFILE_USER, GET_USERS} from "../constants/actionTypes";

const UserReducer = (users = [], action)=>{
    switch (action.type){
        case GET_USERS:
            return action.payload;
        case CREATE_PROFILE_USER:
            return [...users, action.payload]
        default:
            return users;
    }
};

export default UserReducer;