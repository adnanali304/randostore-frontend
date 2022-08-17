
import { combineReducers, createStore} from "redux";
import cartReducer from "./reducers/cart";
const rootReducer = combineReducers({
    cart: cartReducer
});
const store = createStore(rootReducer, {});

store.subscribe(() => {
    window.localStorage.setItem("randostore_cart", JSON.stringify(store.getState().cart));
});

export default store;