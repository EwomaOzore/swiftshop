import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";



const ShopCart = ({ shopItems, addToCart }) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            {shopItems.map((shopItems) => {
                return (
                    <div className="box">
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{shopItems.discount}% off</span>
                                <img src={shopItems.cover} alt="" />
                                <div className="product-like">
                                    <label>0</label> <br />
                                    <FontAwesomeIcon className="i" icon={faHeart} onClick={increment} />
                                </div>
                            </div>
                            <div className="product-details">
                                <h3>{shopItems.name}</h3>
                                <div className="rate">⭐⭐⭐⭐⭐
                                </div>
                                <div className="price">
                                    <h4>{shopItems.price}.00</h4>
                                    <button onClick={() => addToCart(shopItems)}>
                                        <FontAwesomeIcon className="i" icon={faPlus} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default ShopCart