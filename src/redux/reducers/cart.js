
import _ from "lodash";

const initial_state = JSON.parse(window.localStorage.getItem("randostore_cart")) || {
    items: []
}

const cartReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "cart/add/item": {
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            }
        }
        
        case "cart/update/item": {
            const {id, updates} = action.payload;
            const itemIndex = _.findIndex(state.items, {id});
            if(itemIndex == -1) return state;
            let newItems = [...state.items];
            newItems[itemIndex] = {
                ...newItems[itemIndex],
                ...updates
            }
            return {
                ...state,
                items: newItems
            }
        }
        
        case "cart/remove/item": {
            const itemIndex = _.findIndex(state.items, action.payload);
            if(itemIndex == -1) return state;
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1),
                ]
            }
        }
        default:
            return state;
    }
}
export default cartReducer;
