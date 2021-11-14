export const loadState = () => {
    try {
        const initialState = localStorage.getItem('store');
        if (initialState === null) {
            return undefined;
        }
        return JSON.parse(initialState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (store) => {
    try {
        const initialState = JSON.stringify(store);
        localStorage.setItem('store', initialState);
    } catch {
        // ignore write errors
    }
};