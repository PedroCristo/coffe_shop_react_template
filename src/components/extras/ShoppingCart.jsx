import PropTypes from "prop-types";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./ShoppingCardItem";

function ShopingCart({ show, setRemoveCart }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCart();

  const quantity = getItemQuantity();
  return (
    <div className={`shopping-cart ${show ? "show" : ""}`}>
  {cartItems.map((item) => 
    <CartItem key={item.id} {...item} />
  )}
  <div>
    <span className="display-none" onClick={() => setRemoveCart(true)}>
      <i className="fas fa-times"></i>
    </span>
    <h1>Shopping Cart</h1>
    <hr />
    <div className="row">
      <div className="col">
        <img src="/images/products_images/machines/machine-8.png" alt="" />
      </div>
      <div className="col">
        <h3>nome</h3>
        <h3>price</h3>
        <span>description</span>
      </div>
      <div className="col">
        <span>Quantity</span>
        <div className="quantity-icons">
          <span onClick={() => increaseCartQuantity()}>+</span> 
          <span onClick={() => decreaseCartQuantity()}>-</span> 
        </div>
        <div>
          <span>{quantity}</span>
        </div>
      </div>
      <div className="col">
        <span>Total</span>
        <span>150.00</span>
        <button className="btn" onClick={() => removeFromCart()}>Remove</button>
      </div>
    </div>
    <hr />
  </div>
  <div className="row order-footer">
    <hr />
    <span>Total Order</span>
    <span>152220</span>
  </div>
</div>

  )
}
ShopingCart.propTypes = {
  show: PropTypes.bool.isRequired,
  setRemoveCart: PropTypes.func.isRequired, // Corrected prop type
  setShowCart: PropTypes.func.isRequired, 
};


export default ShopingCart;