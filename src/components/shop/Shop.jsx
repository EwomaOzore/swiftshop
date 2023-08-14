import React from 'react'
import Catg from './Catg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ShopCart from './ShopCart';
import './Style.css';

const Shop = ({ shopItems, addToCart }) => {
    return (
        <>
            <section className='shop background'>
                <div className='container d_flex'>
                    <Catg />

                    <div className='contentWidth'>
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <h2>Mobile Phones</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View All</span>
                                <FontAwesomeIcon className="i" icon={faCaretRight} />
                            </div>
                        </div>

                        <div className='product-content grid1'>
                            <ShopCart addToCart={addToCart} shopItems={shopItems} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop