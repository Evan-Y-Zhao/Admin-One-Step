import { feedbackListUrl } from 'Utils/urlUtil'
import { callApi } from 'Utils/apiUtil'

export const FEEDBACK_LIST = 'FEEDBACK_LIST';
export const FEEDBACK_SEARCH_FIELD = 'FEEDBACK_SEARCH_FIELD';
export const FEEDBACK_TABLE_CONFIG = 'FEEDBACK_TABLE_CONFIG';

export function getFeedbackList(config = {} ) {
    return (dispatch, getState) => {
        const feedback = getState().feedback
        const tableConfig = { ...feedback.tableConfig, ...config }
        const searchfields = feedback.searchfields
        const options = {
            method: 'POST',
        }

        options.body = JSON.stringify({
            key: searchfields.key.value,
            ...tableConfig,
        })
        const request = () => ({ type: FEEDBACK_LIST, payload: { feedbackList: {}, feedbackListLoaded: false, tableConfig } })
        const success = (response) => {
            return { type: FEEDBACK_LIST, payload: { feedbackList: response, feedbackListLoaded: true } }
        }
        const failure = () => ({ type: FEEDBACK_LIST, payload: { feedbackList: {}, feedbackListLoaded: true } })
        
        return dispatch(callApi(feedbackListUrl, options, request, success, failure))
    }
}

export function updateSearchFields(params) {
    return {
        type: FEEDBACK_SEARCH_FIELD,
        payload: params
    }
}

export function updateTableConfig(params) {
    return {
        type: FEEDBACK_TABLE_CONFIG,
        payload: params
    }
}