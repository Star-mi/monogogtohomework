import { LOGGING, FILLNAMES, MESSAGE, TIME, ADDITEM, DELETEITEM } from "../actions/userActions";

export const appReducer = (state, action) => {
    switch (action.type) {

        case LOGGING:
            return { ...state, passkey: action.payload }
        case FILLNAMES:
            return { ...state, dataNames: action.payload }
        case MESSAGE:
            return { ...state, msg: action.payload }
        case TIME:
            return { ...state, respTime: action.payload }
        case ADDITEM:
            const newstate = { ...state };
            const items = newstate.dataItems;
            const element = items.filter(el => el.symbol === action.payload.symbol)[0];
            if (element) {
                const index = items.indexOf(element);
                items.splice(index, 1);
            }
            items.push(action.payload);
            return { ...newstate, dataItems: items }
        case DELETEITEM:
            return { ...state, dataItems: action.payload }
        default:
            return state;
    }
}