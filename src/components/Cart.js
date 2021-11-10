import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { productQuantity } from '../actions/productQuantity'
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.png';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';

function Cart({ basketProps, productQuantity }) {
    console.log(basketProps)

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if (basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item]);
        }
        console.log(productsInCart);
    });

    // const productImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

    const productImages = (product) => {
        if (product.tag === 'blackHoodie') {
            return photo1;
        } else if (product.tag === 'grayHoodie') {
            return photo2;
        } else if (product.tag === 'blueHoodie') {
            return photo3;
        } else if (product.tag === 'pinkHoodie') {
            return photo4;
        } else if (product.tag === 'streetHoodie') {
            return photo5;
        } else if (product.tag === 'printedHoodie') {
            return photo6;
        } else if (product.tag === 'warmHoodie') {
            return photo7;
        } else if (product.tag === 'basicHoodie') {
            return photo8;
        }
    }

    productsInCart = productsInCart.map((product, index) => {
        console.log('My product is');
        console.log(product);
        return (
            <Fragment key={index}>
                <div className="product">
                    <div className="close-circle">x</div>
                    <img src={productImages(product)} alt="" />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <div onClick={() => productQuantity('decrease', product.tag)} className="decrease"> - </div>
                    <span>{product.numbers}</span>
                    <div onClick={() => productQuantity('increase', product.tag)} className="increase"> + </div>
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">${basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, { productQuantity })(Cart);
