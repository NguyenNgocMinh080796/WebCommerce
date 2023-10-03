import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { ProductReducer } from './reducer/ProductReducer';
import { DrawerReducer } from './reducer/DrawerReducer';

const rootReducer = combineReducers({
    ProductReducer: ProductReducer,
    DrawerReducer: DrawerReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))