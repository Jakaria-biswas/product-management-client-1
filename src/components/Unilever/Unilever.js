import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Product from '../Product/Product';
import './Unilever.css'
const Unilever = () => {
    const [unilever, setUnilever] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('http://localhost:4000/unilever')
            .then(res => res.json())
            .then(result => {
                setUnilever(result)
                setIsLoading(true)
            })
    }, [])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='unilever'>
            {
                isLoading ?
                    <div>
                        <h3>here is show all Unilever product {unilever.length}</h3>
                        <div className="products-container">
                            {
                                unilever.map(product => <Product product={product}></Product>)
                            }
                        </div>
                    </div> : "Loading..."
            }
        </motion.div>
    );
};

export default Unilever;