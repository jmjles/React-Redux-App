import { combineReducers } from "redux";
import {listReducer} from './listReducer'

export const RootReducer = combineReducers({
    list:listReducer
})