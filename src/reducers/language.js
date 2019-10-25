import { getItem, setItem } from 'Utils/localStorageUtil'
import {
  CHANGE_LANGUAGE
} from "Actions/language"

let lang = getItem('lang')

// initialize language for the site
if (typeof lang === 'undefined' || lang === null) {
    const navLang = navigator.language || navigator.userLanguage
    if (typeof navLang === 'string') {
        if (navLang.indexOf('zh') !== -1 || navLang.indexOf('ch') !== -1) {
            lang = 'zh'
        } else {
            lang = 'en'
        }
    } else {
        lang = 'zh'
    }
    lang = 'zh' // Consider Chinese only right now.
    setItem('lang', lang)
}
export function language(state = lang, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.payload
        default:
            return state;
    }
}