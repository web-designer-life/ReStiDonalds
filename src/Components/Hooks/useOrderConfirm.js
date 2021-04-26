import { useState } from 'react';

export const useOrderConfirm = () => {
    const [openOrderConfirm, setOpenOrderConfirm] = useState(null);

    return { openOrderConfirm, setOpenOrderConfirm };
};
