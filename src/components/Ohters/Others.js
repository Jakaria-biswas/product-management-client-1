import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './Others.css';
import Product from '../Product/Product';
const Others = () => {
    const [others, setOthers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        fetch('http://localhost:4000/others')
            .then(res => res.json())
            .then(result => {
                setOthers(result)
                setIsLoading(true)
            })
    }, [])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='others'>
            {
                isLoading ?
                    <div>
                        <h4>here is show all others products {others.length}</h4>
                        <div className="products-container">
                            {
                                others.map(product => <Product product={product}></Product>)
                            }
                        </div>

                    </div> : "Loading..."
            }
        </motion.div>
    );
};

export default Others;