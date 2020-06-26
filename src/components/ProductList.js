import React from 'react';
import ProductDetails from "./ProductDetails";

const ProductList = () => {
    return (
        <div className="ProductBox">
            <ProductDetails img="iPhone11.png" title="iPhone 11" price="1549,00 €" alt="FairPhone"/>
            <ProductDetails img="fairphone.png" title="FairPhone" price="399,00 €" alt="iPhone11"/>
            <ProductDetails img="Samsungs20.png" title="Samsung S20" price="1399,00 €" alt="Samsungs20"/>
        </div>
    )
}

export default ProductList
