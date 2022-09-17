import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Home  from './components/Home/Home'
import Products from './components/Products/Products';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Unilever from './components/Unilever/Unilever';
import Foods from './components/Foods/Foods';
import Others from './components/Ohters/Others';




function App() {
  return (
    <div> 
       
       <Main/>
            <Routes>
                 <Route path="/createNewProduct" element={<CreateProduct/>}></Route>
                 <Route path="/" element={<Home/>}></Route>
                 <Route path="/products" element={<Products/>}></Route>
                 <Route path="/unilever" element={<Unilever/>}></Route>
                 <Route path="/foods" element={<Foods/>}></Route>
                 <Route path="/others" element={<Others/>}></Route>
            </Routes>
    </div>
  );
}

export default App;
