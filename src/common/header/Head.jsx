import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <FontAwesomeIcon className="i" icon={faPhone} />
                        <label>+234123456789</label>
                        <FontAwesomeIcon className="i" icon={faEnvelope} />
                        <label>example@gmail.com</label>
                    </div>
                    <div className="right row">
                        <label>Theme FAQ's</label>
                        <label>Need Help</label>
                        <span>🇳🇬</span>
                        <label htmlFor="">EN</label>
                        <span>🇳🇬</span>
                        <label htmlFor="">NGN</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head