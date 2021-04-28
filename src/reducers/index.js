import { combineReducers } from 'redux';

import jobs from "./jobs";
import auth from "./auth";
import profiles from "./profile";
import users from "./user"

export const reducers = combineReducers({ auth,profiles,jobs,users });