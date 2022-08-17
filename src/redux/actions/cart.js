
import store from "../index";

export const addItem = (payload) => {
    store.dispatch({
        type: "cart/add/item",
        payload: payload
    })
}

export const removeItem = (payload) => {
    store.dispatch({
        type: "cart/remove/item",
        payload: payload
    })
}

export const setItemQuantity = (id, qty) => {
    store.dispatch({
        type: "cart/update/item",
        payload: {
            id: id,
            updates: {qty}
        }
    })
}