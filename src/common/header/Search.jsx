import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Search = ({ cartItem }) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
    return (
        <div>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <h1>SwiftShop</h1>
                    </div>
                    <div className="search-box f_flex">
                        <FontAwesomeIcon className="i" icon={faSearch} />
                        <input type="text" placeholder="Search items..." />
                        <span>Categories</span>
                    </div>

                    <div className="icon f_flex width">
                        <FontAwesomeIcon className="i icon-circle" icon={faUser} />
                        <div className="cart">
                            <Link to='/cart'>
                                <FontAwesomeIcon className="i icon-circle" icon={faCartShopping} />
                                <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search