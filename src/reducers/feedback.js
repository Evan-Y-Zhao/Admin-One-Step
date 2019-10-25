import {
    FEEDBACK_LIST,
    FEEDBACK_SEARCH_FIELD,
    FEEDBACK_TABLE_CONFIG
} from "Actions/feedback"
import update from 'immutability-helper'

const initialState = {
    feedbackList: {},
    feedbackListLoaded: false,
    searchfields: {
        key: {
            type: 'textfield',
            label: "Others:Feedback:SearchField",
            value: '',
            required: false
        }
    },
    tableConfig: {
        pageSize: 10,
        pageNum: 1,
        orderByColumn: 'id',
        isAsc: "desc",
    }
};

export function feedback(state = initialState, action) {
    switch (action.type) {
        case FEEDBACK_LIST:
            return {
                ...state,
                ...action.payload
            }
        case FEEDBACK_SEARCH_FIELD:
            return update(state, { searchfields: action.payload })
        case FEEDBACK_TABLE_CONFIG:
            return update(state, { tableConfig: action.payload })
        default:
            return state;
    }
}