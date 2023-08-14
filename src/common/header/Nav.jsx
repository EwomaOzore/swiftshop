import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBorderAll, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <div>
            <header className="header">
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span><FontAwesomeIcon className="i" icon={faBorderAll} /></span>
                        <h4>Categories <FontAwesomeIcon className="i" icon={faChevronDown} /></h4>
                    </div>

                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>Pages</Link>
                            </li>
                            <li>
                                <Link to='/user'>User Account</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>Vendor Account</Link>
                            </li>
                            <li>
                                <Link to='/track'>Track My Order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact</Link>
                            </li>
                        </ul>

                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <FontAwesomeIcon className="i close home-btn" icon={faTimes} /> :
                                    <FontAwesomeIcon className="i open" icon={faBars} />
                            }
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav