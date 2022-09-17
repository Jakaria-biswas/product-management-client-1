import React, { useEffect, useState } from 'react';
import './Products.css';
import { motion } from "framer-motion";
import Product from '../Product/Product';
const Products = () => {

    const [products, setProducts] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {

        fetch('http://localhost:4000/allProducts')
            .then(res => res.json())
            .then(result => {
                setProducts(result)
                setDisplayProduct(result)
                setIsLoading(true)


            })


    }, [])


    const searchProduct = e => {


        const searchText = e.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchProduct)


        e.preventDefault()
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='products'>
            {
                isLoading ?
                    <div>
                        <h3>total products here: {products.length}</h3>
                        <div className="search-product">
                            <input type="text" onChange={searchProduct} placeholder='search product' />
                        </div>
                        <div className='products-container'>
                            {
                                displayProduct.map(product => <Product key={product._id} product={product}></Product>)
                            }
                        </div>
                    </div> : "Loading..."
            }
        </motion.div>
    );
};

export default Products;