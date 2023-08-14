import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Nav from "./Nav";

const Header = ({ cartItem }) => {
    return (
        <>
            <Head />
            <Search cartItem={cartItem} />
            <Nav />
        </>
    )
}

export default Header