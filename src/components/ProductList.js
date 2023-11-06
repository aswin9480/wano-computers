import React, { Component } from 'react';
import Product from "./Product";
import Title from "./Title";
import {ProductConsumer} from '../context';
import './anim.css'
import logo from '../logo.svg';
export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
               
                    <div className="container">
                    <Title name="WANO COMPUTERS" title={<img src={logo} alt="Your SVG" width={110} />}/>
                    
                    <p class="sudo"><b>Collection of brand new GPU series from NVIDIA INTEL & AMD!! </b> </p>
                       <div className="row">
                         <ProductConsumer>
                             {value=>{
                               return value.products.map(product =>{
                                   return <Product key={product.id} product={product} />;
                               });
                             }}
                         </ProductConsumer>
                       </div>
                       </div> 
                    </div>
            </React.Fragment>
        );
    }
}
