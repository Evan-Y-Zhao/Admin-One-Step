import { setItem } from 'Utils/localStorageUtil'

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"

export function changeLang(lang) {
    setItem('lang', lang)
    return {
        type: CHANGE_LANGUAGE, payload: lang
    }
}
