import { API_ENDPOINT } from "../configs";
import { setItemQuantity, removeItem } from "../redux/actions/cart";


const CartItemRow = (product) => {
    return (
        <tr className="cart-item">
            <td className="item">
                <img src={API_ENDPOINT+product.img}/>
                <h5>{product.name}</h5>
            </td>
            <td className="fw-semibold">
                {product.price} PKR
            </td>
            <td>
                <div class="input-group justify-content-center">
                    <span class="input-group-btn">
                        <button type="button" disabled={product.qty == 1} onClick={() => setItemQuantity(product.id, product.qty - 1)} className="btn btn-primary btn-number fw-bold">
                            -
                        </button>
                    </span>
                    <input type="text" disabled class="form-control fw-bold" value={product.qty}/>
                    <span className="input-group-btn" >
                        <button type="button" onClick={() => setItemQuantity(product.id, product.qty + 1)} class="btn btn-primary btn-number fw-bold">
                            +
                        </button>
                    </span>
                </div>
            </td>
            <td className="fw-semibold">
                {product.price * product.qty} PKR
            </td>
            <td>
                <button onClick={() => removeItem({id: product.id})} className="btn btn-danger">Remove</button>
            </td>
        </tr>
    )
}

export default CartItemRow;