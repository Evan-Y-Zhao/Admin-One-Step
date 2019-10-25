export function setItem(item, idToken) {
    localStorage.setItem(item, idToken);
}

export function removeItem(item) {
    localStorage.removeItem(item);
}

export function getItem(item) {
    return localStorage.getItem(item);
}

