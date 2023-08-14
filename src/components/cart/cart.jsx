import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className="cart-details">
                        {cartItem.length === 0 && <h1 className="no-items product">Your Cart Is Empty</h1>}

                        {cartItem.map((item) => {
                            const prodcutQty = item.price * item.qty
                            return (
                                <div className="cart-list product d_flex" >
                                    <div className="img">
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>{item.price}.00 * {item.qty}
                                            <span>₦{prodcutQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button>
                                                <FontAwesomeIcon className="i" icon={faXmark} />
                                            </button>
                                        </div>
                                        <div className="cartControl d_flex">
                                            <button className="incCart" onClick={() => addToCart(item)}>
                                                <FontAwesomeIcon className="i" icon={faPlus} />
                                            </button>
                                            <button className="decCart" onClick={() => decreaseQty(item)}>
                                                <FontAwesomeIcon className="i" icon={faMinus} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d_flex">
                            <h4>Total Price : </h4>
                            <h3>₦{totalPrice}.00</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart