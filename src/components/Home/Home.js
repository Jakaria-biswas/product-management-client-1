import React from 'react';
import './Home.css';
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='home'>
             <h1>thi is home page</h1>
        </motion.div>
    );
};

export default Home;