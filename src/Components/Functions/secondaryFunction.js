export const totalPriceItems = (order) => {
    const countToppings = order.topping && order.topping.filter((item) => item.checked).length;
    const priceTopping = (order.price * 0.1) * countToppings;

    return (order.price + priceTopping) * order.count;
};

export const formatCurrency = (value) => value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

export const projection = (rules) => {
    const keys = Object.keys(rules);

    return obj => keys.reduce((newObj, key) => {
        newObj[key] = rules[key].reduce((value, fn, index) => (index ? fn(value) : obj[fn]), null);
        return newObj;
    }, {})
};
