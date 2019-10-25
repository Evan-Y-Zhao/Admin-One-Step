import {
    USER_INITIAL,
    USER_SUCCESS,
    USER_FAILURE,
    USER_VERIFY,
    FORM_CHANGE
} from "Actions/auth"
import { getAuth, getUserName, setIdToken, loadIdToken } from 'Utils/jwtUtil'

const initialState = {
    id: loadIdToken(),
    isAuthenticated: getAuth(),
    username: { value: getUserName(), error: false, helperText: '' },
    password: { value: '', error: false, helperText: '' }
}

export function auth(state = initialState, action) {
    let payload = {}
    switch (action.type) {
        case USER_SUCCESS:
            payload = action.payload
            setIdToken(payload.id)
            return {
                ...state,
                ...payload
            }
        case USER_INITIAL:
        case USER_VERIFY:
        case FORM_CHANGE:
        case USER_FAILURE:
            payload = action.payload

            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}