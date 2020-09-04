// products context
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts } from '../utils/helpers';

const ProductContext = React.createContext();

function ProductProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        setLoading(true)
        axios.get(`${url}/products`).then(resp => {
            setProducts(resp.data)
            setFeatured(featuredProducts(resp.data))
            setLoading(false)
        })
    }, []);

    return (
        <ProductContext.Provider value={{ loading, products, featured }}>
            {children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductProvider, ProductConsumer }