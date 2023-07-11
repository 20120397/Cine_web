import { combineReducers } from "redux";

import UsersReducer from "./usersReducers";


const reducers=combineReducers({users: UsersReducer})

export default reducers;