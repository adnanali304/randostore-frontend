import {useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/actions/cart";
import _ from "lodash";
import { API_ENDPOINT } from "../configs";

const ProductBlock = (product) => {
    const addedToCart = useSelector(({cart}) => _.find(cart.items, {id: product.id}));
    return (
        <div className="product">
            <img src={API_ENDPOINT+product.img}/>
            <div className="detail">
                <h4 className="name">{product.name}</h4>
                <span className="price">{product.price} PKR</span>
            </div>
            {addedToCart ? 
                <button onClick={() => removeItem({id: product.id})} className="btn btn-danger btn-block">Remove from Cart</button>
            : 
                <button onClick={() => addItem({...product, qty: 1})}  className="btn btn-primary btn-block">Add to Cart</button>
            }
        </div>
    )
}

export default ProductBlock;