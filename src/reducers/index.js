import { combineReducers } from 'redux';

import jobs from "./jobs";
import auth from "./auth";
import profiles from "./profile";
import users from "./user";
import userdata from "./userdata";
import applications from "./application";
import jobdetails from "./jobDetails";
import relatedjobs from "./relatedjobs";
import refers from "./refer"

export const reducers = combineReducers({ auth,profiles,jobs,users,userdata,applications,jobdetails,relatedjobs,refers });