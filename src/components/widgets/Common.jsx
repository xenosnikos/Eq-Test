export const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const stringReplace = (str, username) => {
    return str.split("{username}").join(username);
}

export const decodeString = (string) => {
    if(string !== ''){
        return string.replace(/(<([^>]+)>)/gi, "");
    }
}