import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faTrash,faClock } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  
    const {_id,name,category,quantity,postTime} = props.product;

    const handleDelete = id => {
          
            fetch(`http://localhost:4000/deleteProduct/${id}`, {
                  method:"DELETE"
            })
            .then(res => res.json())
            .then(result => {
                 if(result.delete === 200){
                    alert('Delete successfully')
                     window.location.reload()
                 }
            })
            
    }
    return (
        <div className='product'>
                <h4>{name}</h4>
                <p><span>quantity: {quantity} pc</span></p>
                <p><span>category: {category} </span></p>
       
                 <div className="product-bottom-info">
                 <span className='post-time'><FontAwesomeIcon icon={faClock} /> {postTime}</span> 
                 <span title="update" className='update'><FontAwesomeIcon icon={faPen} /></span> 
                 <span onClick={ () => handleDelete(`${_id}`)}  title="delete" className='delete'><FontAwesomeIcon icon={faTrash} /></span> 
                 </div>
        </div>
    );
};

export default Product;