import { useState } from 'react';

const getToppings = (toppings) => toppings.map(item => ({
    name: item,
    checked: false,
}));

export function useToppings(openItem) {
    const readyTopping = openItem.topping ? openItem.topping : 
        openItem.toppings ? 
        getToppings(openItem.toppings) : 
        [];
    const [toppings, setToppings] = useState(readyTopping);

    const checkToppings = (index) => {
        setToppings(toppings.map((item, i) => {
            const newTopping = {...item};

            if (i === index) {
                newTopping.checked = !newTopping.checked;
            }

            return newTopping;
        }));
    }

    return {toppings, checkToppings};
}
