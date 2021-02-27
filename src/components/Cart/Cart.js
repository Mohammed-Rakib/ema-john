import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const item = cart.reduce( (item, product) => item +product.price,0);
    let shipping = 0;
    if( item < 15){
        shipping = 0
    }else if(item < 50){
        shipping = 3.55
    }
    else{
        shipping = 12.99
    }
    const tax = (item / 10).toFixed(2);
    const grandTotal =(item + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered : {cart.length}
            <p>Item : {formatNumber(item)}</p>
            <p>Shipping : {shipping}</p>
            <p>tax : {tax}</p>
            <p>Total : ${grandTotal}</p>
            </p>
        </div>
    );
};

export default Cart;