import { useState } from "react"


export default function useLocalStorage(key, initValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initValue;
        } catch {
            return initValue
        }
    });

    const setValue = value => {
        try {
            setStoredValue(value);
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error)
        }
    }
    return [storedValue, setValue]
};
