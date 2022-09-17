import React from 'react';
import './Main.css';
import {Link, NavLink } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <div className='wrapper'>
            <div className="header">
                <h2>Product Management Software</h2>
            </div>
            <div className='sidebar'>
             <ul>
             <li >
                     <NavLink className="nav-link" exact="true" activeclassname="active"  to="/createNewProduct" >Create New Product</NavLink>
                 </li>
                 <li >
                     <NavLink className="nav-link" exact="true" activeclassname="active"  to="/" >Home</NavLink>
                 </li>
                 <li >
                    <NavLink className="nav-link"  exact="true" activeclassname="active"    to="/products">Products</NavLink>
                 </li>
                 <li >
                    <NavLink className="nav-link"  exact="true" activeclassname="active"    to="/unilever">Unilever</NavLink>
                 </li>
                 <li >
                    <NavLink className="nav-link"  exact="true" activeclassname="active"    to="/foods">Foods</NavLink>
                 </li>
                 <li >
                    <NavLink className="nav-link"  exact="true" activeclassname="active"    to="/others">Others</NavLink>
                 </li>
            </ul>   
        </div>

        </div>
        </div>
    );
};

export default Main;