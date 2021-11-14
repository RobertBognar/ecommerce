import React, { useState } from 'react';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.png';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    return (
        <div className="container">
            <div className="image">
                <img src={photo1} alt="black hoodie" />
                <h3>Black Hoodie</h3>
                <h3>$20,00</h3>
                <p className="description">Great Black Hoodie For Every Day.</p>
                <a onClick={() => props.addBasket('blackHoodie')} className="addToCart cart1" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo2} alt="gray hoodie" />
                <h3>Brown Hoodie</h3>
                <h3>$30,00</h3>
                <p className="description">Casual Gray Hoodie. Great For Sports!</p>
                <a onClick={() => props.addBasket('grayHoodie')} className="addToCart cart2" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo3} alt="blue hoodie" />
                <h3>Royal Blue Hoodie</h3>
                <h3>$40,00</h3>
                <p className="description">100% Cotton Royal Blue Hoddie.</p>
                <a onClick={() => props.addBasket('blueHoodie')} className="addToCart cart3" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo4} alt="pink hoodie" />
                <h3>Pink Hoodie</h3>
                <h3>$60,00</h3>
                <p className="description">Cozy & Warm Pink Hoodie. 100% Cotton!</p>
                <a onClick={() => props.addBasket('pinkHoodie')} className="addToCart cart4" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo5} alt="street style hoodie" />
                <h3>Street Style Hoodie</h3>
                <h3>$70,00</h3>
                <p className="description">Street Style Printed Hoodie! Great Quality!</p>
                <a onClick={() => props.addBasket('streetHoodie')} className="addToCart cart5" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo6} alt="designer hoodie" />
                <h3>Designer Hoodie</h3>
                <h3>$170,00</h3>
                <p className="description">Top Quality Printed Hoodie!</p>
                <a onClick={() => props.addBasket('printedHoodie')} className="addToCart cart6" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo7} alt="casual hoodie" />
                <h3>Casual Every Day Hoodie</h3>
                <h3>$99,00</h3>
                <p className="description">Warm Hoodie For Cold Days! 100% Cotton!</p>
                <a onClick={() => props.addBasket('warmHoodie')} className="addToCart cart7" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo8} alt="sport type hoodie" />
                <h3>Sport Type Hoodie</h3>
                <h3>$80,00</h3>
                <p className="description">Basic Gray Hoodie. Best seller!</p>
                <a onClick={() => props.addBasket('basicHoodie')} className="addToCart cart8" href="#">Add To Cart</a>
            </div>
        </div>
    );
}

export default connect(null, { addBasket })(Home);
