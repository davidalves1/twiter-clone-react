const setStorageItem = (key, value) => {
    localStorage.setItem(`@OmniTwitter:${key}`, value);
}

const getStorageItem = key => {
    return localStorage.getItem(`@OmniTwitter:${key}`);
}

const getStorageAllItems = () => {
    const keys = Object.keys(localStorage);

    const validKeys = keys.filter(key => {
        return key.includes('@OmniTwitter');
    });

    const values = {};
    validKeys.forEach(key => {
        const alias = key.replace('@OmniTwitter:', '');
        values[alias] = getStorageItem(alias);
    })

    return values;
}

export {
    setStorageItem,
    getStorageItem,
    getStorageAllItems
}