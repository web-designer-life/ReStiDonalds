import { useState } from 'react';

export function useChoices() {
    const [choice, setChoice] = useState();

    function changeChoices(evt) {
        setChoice(evt.target.value);
    }

    return {choice, changeChoices};
}