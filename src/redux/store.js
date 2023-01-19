

import { configureStore } from '@reduxjs/toolkit';
import dishes from "./dishesSlice";
import cart from "./cartSlice";

export default configureStore({
    reducer: {
        dishes: dishes,
        cart
    }
});
