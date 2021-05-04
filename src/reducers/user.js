import { CREATE_PROFILE_USER, DATA, GET_USERS} from "../constants/actionTypes";

const UserReducer = (users = [], action)=>{
    switch (action.type){
        case GET_USERS:
            return action.payload;
        case CREATE_PROFILE_USER:
            return [...users, action.payload]
        case DATA:
            return users.filter((user) => user._id !== action.payload);
        default:
            return users;
    }
};

export default UserReducer;