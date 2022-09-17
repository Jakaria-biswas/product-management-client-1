import React, { useRef } from 'react';
import './CreateProduct.css';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const CreateProduct = () => {


    const productName = useRef();
    const productCategory = useRef();
    const productQuantity = useRef();
     let navigate = useNavigate()

    const handlesSubmit = e => {


        const name = productName.current.value;
        const category = productCategory.current.value;
        const quantity = productQuantity.current.value;
        
        const product = {name: name, category: category, quantity: quantity, postTime: new Date().toLocaleDateString('en-GB')}
      
         fetch('http://localhost:4000/createProduct', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              body: JSON.stringify(product)
         })
         .then( res => res.json())
         .then(result => {
            if(result.statusCode === 200){
                alert("data save successfully")
                e.target.reset()
                navigate('/products')
              
            }
         })

        






        e.preventDefault()
    }
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='crete-product'>
            <h2>Create new product</h2>
            <div className="form-area">
                <form onSubmit={handlesSubmit}>
                    <div className="product-name">
                        <label htmlFor="">Name : </label>
                        <input type="text" id="name" ref={productName}  required/>
                    </div>


                    <div className="beside">
                        <div className="category">
                            <label htmlFor="category">Category : </label>

                            <select id="category" ref={productCategory} required >
                                <option value="foods">foods</option>
                                <option value="unilever" >unilever</option>
                                <option value="others" >others</option>
                            </select>


                        </div>
                        <div className="quantity">
                            <label htmlFor="quantity">Quantity : </label>
                            <input type="number" id="quantity" ref={productQuantity} required />
                        </div>
                    </div>


                    <div className="submit-btn">
                        <input type="submit" value="Create Product" />
                    </div>

                </form>
            </div>
        </motion.div>
    );
};

export default CreateProduct;