import { callApi } from 'Utils/apiUtil'
import { productListUrl as listUrl, productSaveUrl as saveUrl, productEditUrl as editUrl, productUpdateUrl as updateUrl, productDeleteUrl as deleteUrl } from 'Utils/urlUtil'

export const CRUD_LIST = 'CRUD_LIST';
export const SAVE_CRUD = 'SAVE_CRUD';
export const GET_CRUD = 'GET_CRUD';
export const UPDATE_CRUD = 'GET_CRUD';
export const DELETE_CRUD = 'DELETE_CRUD';
export const CRUD_SET_GENERAL = 'CRUD_SET_GENERAL';
export const CRUD_UPDATE_FIELD = 'CRUD_UPDATE_FIELD';

// Send To Backend Request customer list
export function getCRUDList(config = {} ) {
    return (dispatch, getState) => {
        const reducer = getState().CRUD
        const tableConfig = { ...reducer.tableConfig, ...config }
        const searchfields = reducer.searchfields
        const options = {
            method: 'POST',
        }
        
        options.body = JSON.stringify({
            CRUD_name: searchfields.CRUDName.value,
            ...tableConfig,
        })
        const request = () => ({ type: CRUD_LIST, payload: { CRUDList: {}, CRUDListLoaded: false, tableConfig } })
        const success = (response) => {
            return { type: CRUD_LIST, payload: { CRUDList: response, CRUDListLoaded: true } }
        }

        const failure = () => ({ type: CRUD_LIST, payload: { CRUDList: {}, CRUDListLoaded: true } })
        
        return dispatch(callApi(listUrl, options, request, success, failure))
    }
}

export function saveCRUD(params) {
    const options = {
        method: 'POST',
    }
   
    options.body = JSON.stringify({
        ...params
    })

    const request = () => ({ type: SAVE_CRUD, payload: { savingStatus: 'saving' } })
    const success = (response) => ({ type: SAVE_CRUD, payload: { savingStatus: response.status } })
    const failure = () => ({ type: SAVE_CRUD, payload: { savingStatus: 'failed' } })

    return callApi(saveUrl, options, request, success, failure)
}

export function updateCRUD(params) {
    const options = {
        method: 'post',
    }
    options.body = JSON.stringify({
        ...params
    })

    const request = () => ({ type: UPDATE_CRUD, payload: { savingStatus: 'saving' } })
    const success = (response) => ({ type: UPDATE_CRUD, payload: { savingStatus: response.status } })
    const failure = () => ({ type: UPDATE_CRUD, payload: { savingStatus: 'failed' } })
    
    return callApi(updateUrl, options, request, success, failure)
}

export function getCRUD (params) {
    let url = editUrl + '?Id=' + params;
    const options = {
        method: 'get',
    }

    const request = () => ({ type: GET_CRUD, payload: { CRUDData: {}, CRUDDataLoaded: false } })
    const success = (response) => ({ type: GET_CRUD, payload: { CRUDData: response.data, CRUDDataLoaded: true } })
    const failure = () => ({ type: GET_CRUD, payload: { CRUDData: {}, CRUDDataLoaded: true } })
    
    return callApi(url, options, request, success, failure)
}

export function deleteCRUD (params) {
    let url = deleteUrl + '?Id=' + params;
    const options = {
        method: 'get',
    }

    const request = () => ({ type: DELETE_CRUD, payload: { savingStatus: 'saving' } })
    const success = (response) => ({ type: DELETE_CRUD, payload: { savingStatus: response.status } })
    const failure = () => ({ type: DELETE_CRUD, payload: { savingStatus: 'failed' } })
    
    return callApi(url, options, request, success, failure)
}


export function setCRUDGeneral(params) {
    return {
        type: CRUD_SET_GENERAL,
        payload: params
    }
}

export function updateSearchFields(params) {
    return {
        type: CRUD_UPDATE_FIELD,
        payload: { searchfields: params }
    }
}

export function updateTableConfig(params) {
    return {
        type: CRUD_UPDATE_FIELD,
        payload: { tableConfig: params }
    }
}

