import React from "react";
import Categories from "./Categories";
import Slider from "./Slider";
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="Home">
                <div className="container d_flex">
                    <Categories />
                    <Slider />
                </div>
            </section>
        </>
    )
}

export default Home