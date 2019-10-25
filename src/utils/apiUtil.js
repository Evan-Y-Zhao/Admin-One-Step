import { loadIdToken } from 'Utils/jwtUtil'
import { initial, failure } from '../actions/auth'

export function checkStatus(response) {
    if (!response.ok) {
        // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    // response.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); })
    return response;
}

export function parseJSON(response) {
    return response.json();
}

export function injectAuthorizationHeader() {
    return `Bearer ${loadIdToken()}`
}

/**
 * A utility to call a restful service.
 *
 * @param url The restful service end point.
 * @param config The config object of the call. Can be null.
 * @param request The request action.
 * @param onRequestSuccess The callback function to create request success action.
 *                 The function expects response json payload as its argument.
 * @param onRequestFailure The callback function to create request failure action.
 *                 The function expects error as its argument.
 */
export function callApi(
    url,
    config,
    request,
    onRequestSuccess,
    onRequestFailure
) {
    return dispatch => {
        request && dispatch(request())
        config.headers = new Headers({
            'Accept': 'application/json',
        })
        if (typeof config.method  === 'string' && config.method.toLowerCase() === 'post') {
            config.headers.append(
                'Content-Type', 'application/json'
            )
        }

        if (typeof config.auth === 'undefined' || config.auth) {
            config.headers.append('Authorization', injectAuthorizationHeader())
        }

        return fetch(url, config)
            .then(checkStatus)
            .then(parseJSON)
            .then(json => {
                if (json.status === 501) {
                    dispatch(initial())
                } else if (json.status === 507) {
                    dispatch(failure(json))
                } else {
                    onRequestSuccess && dispatch(onRequestSuccess(json));
                }
                return json
            })
            .catch(error => {
                const response = error.response
                if (response === undefined) {
                    onRequestFailure && dispatch(onRequestFailure(error))
                } else {
                    error.status = response.status
                    error.statusText = response.statusText
                    response.text().then(text => {
                        try {
                            const json = JSON.parse(text)
                            error.message = json.message
                        } catch (ex) {
                            error.message = text
                        }
                        onRequestFailure && dispatch(onRequestFailure(error))
                    });


                }
            });
    };
}

/** Literal get call to api without the interaction with store
 * @param url The restful service end point.
 */
export async function get(url) {
    try {
        const options = {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loadIdToken()}`
            }
        }

        let response = await fetch(url, options)
        let result = await checkStatus(response)
        let data = await parseJSON(result)
        return data
    } catch (err) {
        console.error(err)
    }


}

/** Literal post call to api without the interaction with store
 * @param url The restful service end point.
 * @param data The data to be passed in body.
 */
export async function post(url, data) {
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${loadIdToken()}`
            }
        }
        let response = await fetch(url, options)
        let result = await checkStatus(response)
        return await parseJSON(result)
    } catch (err) {
        console.error(err)
    }

}

export async function postWithFile(url, values) {
    try {
        const newform = new FormData()
        for (let v in values) {
            newform.append(v, values[v])
        }
        const options = {
            method: 'POST',
            body: newform,
            headers: {
                'Authorization': injectAuthorizationHeader(),
            }
        }
        let response = await fetch(url, options)
        let result = await checkStatus(response)
        return await parseJSON(result)
    } catch (err) {
        console.error(err)
    }

}
