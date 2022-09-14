import React, { useEffect, useState } from 'react';

function useLocalStorage(key: any, initial: any) {
    const [data, setData] = useState(() => JSON.parse(window.localStorage.getItem(key) || initial));

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData];
};

export default useLocalStorage;