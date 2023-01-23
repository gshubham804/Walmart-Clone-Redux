import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import LoginReducer from './LoginSlice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        authentication:LoginReducer,
    },
})

export default store;