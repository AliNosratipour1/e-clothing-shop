import {combineReducers} from 'redux';
import userRducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
user:userRducer,
cart:cartReducer

});
