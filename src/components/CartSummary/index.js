import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachValueItem => {
        total += eachValueItem.price * eachValueItem.quantity
      })
      const itemCount = cartList.length
      return (
        <>
          <div className="cart-summary-bg-container">
            <h1 className="cart-summary-head">
              Order Total:
              <span className="cart-summary-money">Rs {total}/-</span>
            </h1>
            <p className="cart-summary-para">{itemCount} Items in cart</p>
            <button type="button" className="cart-summary-button large-view">
              Checkout
            </button>
          </div>
          <button type="button" className="cart-summary-button small-view">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
