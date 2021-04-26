import { useState } from 'react';

export function useCount(startCount) {
    const [count, setCount] = useState(startCount || 1);

    const onChange = (evt) => setCount(evt.target.value);

    return { count, setCount, onChange };
};
