import React from 'react';

function useSessionStorage(key, initialState) {

    const [state, setState] = React.useState(() => {
        const storageValue = sessionStorage.getItem(key);

        if(storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }
    });

    React.useEffect(() =>{
        sessionStorage.setItem(key, JSON.stringify(state));

    },[key, state])

    return [state, setState];
}

export default useSessionStorage;