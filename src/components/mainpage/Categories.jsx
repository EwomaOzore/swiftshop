import React from "react";

const Categories = () => {
    const data = [
        {
            cateImg: './images/category/sports.png',
            cateName: "Sports",
        },
        {
            cateImg: './images/category/health.png',
            cateName: "Health and Beauty",
        },
        {
            cateImg: './images/category/pets.png',
            cateName: "Pets",
        },
        {
            cateImg: './images/category/fashion.png',
            cateName: "Fashion",
        },
        {
            cateImg: './images/category/game.png',
            cateName: "Gaming",
        },
        {
            cateImg: './images/category/electronics.png',
            cateName: "Home and Electronics",
        },
        {
            cateImg: './images/category/game.png',
            cateName: "Gaming",
        },
        {
            cateImg: './images/category/toys.png',
            cateName: "Toys",
        },
        {
            cateImg: './images/category/fashion.png',
            cateName: "Fashion",
        },
        {
            cateImg: './images/category/phones.png',
            cateName: "Phones and Tablets",
        },
        {
            cateImg: './images/category/computer.png',
            cateName: "Computers and Laptos",
        },
    ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="cate1" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories