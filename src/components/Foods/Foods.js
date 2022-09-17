import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Product from '../Product/Product';
import './Foods.css';
const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {


        fetch('http://localhost:4000/foods')
            .then(res => res.json())
            .then(result => {
                setFoods(result)
                setIsLoading(true)
            })

    }, [])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='foods'>
            {
                isLoading ?
                    <div>
                        <h4>here is show all foods product {foods.length}</h4>
                        <div className="products-container">
                            {
                                foods.map(product => <Product product={product}></Product>)
                            }
                        </div>
                    </div> : "Loading..."
            }
        </motion.div>
    );
};

export default Foods;