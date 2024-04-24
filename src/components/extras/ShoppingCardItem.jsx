import PropTypes from "prop-types";
import { useShoppingCart } from "../context/ShoppingCartContext";
import shopProductsData from "../../data/shopProducts";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }) {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
    } = useShoppingCart();

  const item = shopProductsData.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
        test
      <div className="row">
        <div className="col">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="col">
          <h3>{item.name}</h3>
          <h3>{formatCurrency(item.price)}</h3>
          <span>{item.description}</span>
        </div>
        <div className="col">
          <span>Quantity</span>
          <div className="quantity-icons">
            <span onClick={() => increaseCartQuantity(item.id)}>+</span>
            <span onClick={() => decreaseCartQuantity(item.id)}>-</span>
          </div>
          <div>
            <span>{getItemQuantity(item.id)}</span>
          </div>
        </div>
        <div className="col">
          <span>Total</span>
          <span>{formatCurrency(item.price * quantity)}</span>
          <button className="btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
