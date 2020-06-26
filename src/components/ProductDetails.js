/* import React from "react";
import "./ProductDetails.css"

const ProductDetails = (props) => {
    return (
        <div className="ProductBox">
            <img src={props.img} alt=" "/>
            <h2  alt=" ">{props.title}</h2>
            <p  alt=" ">{props.price}</p>
        </div>
    );
}

export default ProductDetails; */

// src="https://source.unsplash.com/300x300/?mobile"

/* 
<img>{props.img}</img>
<h1>{props.title}</h1>
<p>{props.price}</p>

const objectProduct = [
    {
        id: 0001,
        title: "FairPhone 1312",
        price: "399,00 €",
        img: " "
    },
    {
        id: 0002,
        title: "iPhone13",
        price: "1549,00 €",
        img: " "
    },
    {
        id: 0003,
        title: "Samsung Galaxy S20",
        price: "1399,00 €",
        img: " "
    },
] */

import React from "react";
import "./ProductDetails.css"

const ProductDetails = (props) => {
    return (
        <div className="ProductBox">
            <img src={props.img} alt=" "/>
            <h2  alt=" ">{props.title}</h2>
            <p  alt=" ">{props.price}</p>
        </div>
    );
}

export default ProductDetails;

