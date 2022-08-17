import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import CartItemRow from "../components/cartItemRow";


const CartPage = () => {
    const cartItems = useSelector(({ cart }) => cart.items);
    return (
        <>
            <Helmet>
                <title>Cart | RandoStore</title>
            </Helmet>
            <h1 className="fw-bold">Cart</h1>
            <table class="table table-bordered cart-items">
                <thead>
                    <tr>
                        <th className="text-center">ITEM</th>
                        <th>Price</th>
                        <th className="text-center">QTY</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product, key) => <CartItemRow key={key} {...product}/>)}
                </tbody>
            </table>
        </>
    )
}
export default CartPage;