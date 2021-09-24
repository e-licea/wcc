import { combineReducers } from "redux";
import { darkModeReducer } from './darkModeReducer';
import { appReducer } from './appReducer';

export const rootReducer = combineReducers({
    darkModeReducer,
    appReducer  
})