import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent';
import 'semantic-ui-css/semantic.min.css';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("products:", products)
  

  return (
    <div className="ui grid container">
      
        <ProductComponent />
      
    </div>
  );
};

export default ProductListing;
