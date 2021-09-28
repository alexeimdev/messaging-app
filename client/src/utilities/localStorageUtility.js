const keyPrefix = "messaging-app-";

export function storeUser(value) {
    sessionStorage.setItem(keyPrefix + 'user', value);
}

export function getStoredUser() {
    return sessionStorage.getItem(keyPrefix + 'user');
}