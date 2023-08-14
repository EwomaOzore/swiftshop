import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid2'>
                    <div className='box'>
                        <h1>SwiftShop</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='icon d_flex'>
                            <div className='img d_flex'>
                                <FontAwesomeIcon className='i' icon={faGooglePlay} />
                                <span>Google Play</span>
                            </div>
                            <div className='img d_flex'>
                                <FontAwesomeIcon className='i' icon={faAppStore} />
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Victoria Island, Lagos, Nigeria </li>
                            <li>Email: example@gmail.com</li>
                            <li>Phone: +234123456789</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer