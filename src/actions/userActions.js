import { base_url } from "../utils/constans";

export const LOGGING = 'LOGGING';
export const FILLNAMES = 'FILLNAMES';
export const LOGOUT = 'LOGOUT';
export const MESSAGE = 'MESSAGE'
export const TIME = 'TIME';
export const ADDITEM = 'ADDITEM';
export const DELETEITEM = 'DELETEITEM';

export const login = (passkey) => (
    {
        type: LOGGING,
        payload: passkey,
    }
)

export const responceData = names => (
    {
        type: FILLNAMES,
        payload: names,
    }
)

export const message = (msg) => (
    {
        type: MESSAGE,
        payload: msg
    }
)

export const respTime = (time) => (
    {
        type: TIME,
        payload: time
    }
)
export const addItem = (item) => (
    {
        type: ADDITEM,
        payload: item
    }
)
export const deleteItem = (dataItems) => (
    {
           type: DELETEITEM,
           payload: dataItems
       }
   )

export const fetchData = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${base_url}`);
            const names = await response.json();
            dispatch(responceData(names));
        } catch (err) {
            dispatch(message("Something went wrong"));
        }
    }
}

export const logInPasskey = (passkey) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${base_url}/${passkey}`);
            const data = await response.json();
            if (data.length) {
                dispatch(login(data[0]));
                data[0].respTime = Date.now();
                dispatch(addItem(data[0]));
            } else {
                dispatch(message(passkey));
            }
        } catch (err) {
            dispatch(message(passkey));
        }
    }
}