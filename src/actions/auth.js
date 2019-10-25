import { adminLogin } from 'Utils/urlUtil'
import { callApi } from 'Utils/apiUtil'
import { removeAll } from 'Utils/jwtUtil'
import { setAuth, getAuth, setUserName, loadIdToken} from 'Utils/jwtUtil'

export const USER_LOGIN = "USER_LOGIN"
export const USER_SUCCESS = "USER_SUCCESS"
export const USER_INITIAL = "USER_INITIAL"
export const USER_FAILURE = "USER_FAILURE"
export const USER_VERIFY = "USER_VERIFY"
export const FORM_CHANGE = 'FORM_CHANGE'

const success = (response) => {
    setAuth('success')
    return { type: USER_SUCCESS, payload: { isAuthenticated: 'success', id: response } }
}

export const failure = (error) => ({ type: USER_FAILURE, payload: { isAuthenticated: 'error', errorMsg: error.message || '' } })
export const initial = () => {
    removeAll()
    return { type: USER_INITIAL, payload: { isAuthenticated: '' } }
}

// Send the login request to backend.
export function login(params) {
    return (dispatch, getState) => {
        const options = {
            body: JSON.stringify(params),
            method: 'POST',
            auth: false,
        }
        setUserName(params.username || '')
        return dispatch(callApi(adminLogin, options, initial, success, failure))
    }

}


// Check the login status whenever the page is refreshed.
export function checkLogin() {
    if(getAuth() === 'success'){
        return { type: USER_VERIFY, payload: { isAuthenticated: 'success', id: loadIdToken()} }
    } else {
        return { type: USER_VERIFY, payload: { isAuthenticated: '' } }
    }      
}

export function handleChange(params) {
    return { type: FORM_CHANGE, payload: params }
}

export function logout() {
    removeAll()
    return { type: USER_INITIAL, payload: { isAuthenticated: '' } }
}
