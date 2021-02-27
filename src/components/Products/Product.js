import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css';


const Product = (props) => {
    return (
        <div className='pd-container'>
            <div className="product-image">
                <img src={props.product.img} alt=""/>
            </div>
            <div className="product-description">
                <h6>{props.product.name}</h6>
                <div className="pd-description">
                    <div className="left-col">
                        <p>by : {props.product.seller}</p>
                        <h3>${props.product.price}</h3>
                        <p>only {props.product.stock} left in stock - order soon</p>
                        <button 
                            className='main-btn'
                            onClick={() => props.handleAddProduct(props.product)}
                            ><FontAwesomeIcon icon={faShoppingCart} />add to cart
                        </button>
                    </div>
                    <div className="right-col">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;