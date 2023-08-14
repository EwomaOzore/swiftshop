import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Dcard from './Dcard';
import Slider from "react-slick";

const Discount = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 6,
        autoplay: true,
    }
    return (
        <>
            <Slider {...settings}>
                <section className='disocunt background newarrivals'>
                    <div className='container'>
                        <div className="heading d_flex">
                            <div className="heading-left row f_flex">
                                <img src='https://img.icons8.com/windows/32/fa314a/gift.png' width='100%' alt='' />
                                <h2>Big Discount</h2>
                            </div>
                            <div className="heading-right row">
                                <span>View All</span>
                                <FontAwesomeIcon className="i" icon={faCaretRight} />
                            </div>
                        </div>
                        <Dcard />
                    </div>
                </section>
            </Slider>
        </>
    )
}

export default Discount