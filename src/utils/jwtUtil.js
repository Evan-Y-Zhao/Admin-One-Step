import { setItem, removeItem, getItem } from './localStorageUtil'
import jwt_decode from "jwt-decode"
const ID_TOKEN = "id"
const authName = 'isAuthenticated'
const userName = 'Username'


export function setIdToken(idToken) {
  setItem(ID_TOKEN, idToken)
}

export function removeIdToken() {
  removeItem(ID_TOKEN)
}

export function loadIdToken() {
  return getItem(ID_TOKEN)
}

// username
export function setUserName(value) {
    setItem(userName, value);
}

export function getUserName() {
    return getItem(userName) || '';
}

export function removeUserName() {
  removeItem(userName)
}

// auth
export function setAuth(value) {
    setItem(authName, value);
}

export function getAuth() {
    /* if (loadUserProfile()) {
      return getItem(authName);
    }
    return '' */
    return getItem(authName);
}

export function removeAuth() {
    return removeItem(authName);
}

export function removeAll() {
  removeIdToken()
  removeAuth()
}

export function loadUserProfile() {
  try {
    const idToken = loadIdToken()
    const userProfile = jwt_decode(idToken)
    return userProfile
  } catch (err) {
    return null
  }
}