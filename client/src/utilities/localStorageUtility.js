const keyPrefix = "messaging-app-";

export function storeUser(value) {
    localStorage.setItem(keyPrefix + 'user', value);
}

export function getStoredUser() {
    return localStorage.getItem(keyPrefix + 'user');
}