import { applyMiddleware, createStore } from "redux";
import { appReducer } from "../reducers/appReducer";
import thunk from 'redux-thunk';

export const initialState = {
    dataNames: [],
    dataItems:[],
    passkey: "",
    msg:""
}
export const store = createStore(appReducer, initialState, applyMiddleware(thunk));

