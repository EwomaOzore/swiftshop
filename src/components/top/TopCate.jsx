import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import TopCart from "./TopCart";
import './Style.css'

const TopCate = () => {
    return (
        <>
            <section className="topCat background">
                <div className="container">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <FontAwesomeIcon className="i" icon={faBorderAll} />
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right row">
                            <span>View All</span>
                            <FontAwesomeIcon className="i" icon={faCaretRight} />
                        </div>
                    </div>
                    <TopCart />
                </div>
            </section>
        </>
    )
}

export default TopCate