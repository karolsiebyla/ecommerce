import React from 'react';
import { useSelector } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state)
    console.log(products);
    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;