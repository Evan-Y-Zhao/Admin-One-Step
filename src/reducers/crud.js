import {
    CRUD_LIST,
    SAVE_CRUD,
    GET_CRUD,
    UPDATE_CRUD,
    DELETE_CRUD,
    CRUD_SET_GENERAL,
    CRUD_UPDATE_FIELD
} from "Actions/CRUD"
import update from 'immutability-helper'

const initialState = {
    savingStatus: '',
    CRUDList: {},
    CRUDListLoaded: false,
    CRUDData: {},
    searchfields: {
        CRUDName: {
            type: 'textfield',
            label: '主题名称',
            value: '',
            required: false,
        },
    },
    tableConfig: {
        pageSize: 10,
        pageNum: 1,
        orderByColumn: 'id',
        isAsc: "asc",
    },
};

export function CRUD(state = initialState, action) {
    switch (action.type) {
        case CRUD_LIST:
        case SAVE_CRUD:
        case GET_CRUD:
        case UPDATE_CRUD:
        case DELETE_CRUD:
        case CRUD_SET_GENERAL:
            return {
                ...state,
                ...action.payload
            }
        case CRUD_UPDATE_FIELD:
            return update(state, action.payload)
        default:
            return state;
    }
}