import React from 'react';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';

const Home = () => {
    return (
        <div className="container">
            <div className="image">
                <img src={photo1} alt="black hoodie" />
                <h3>Black Hoodie</h3>
                <h3>$20,00</h3>
                <a className="addToCart cart1" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo2} alt="brown hoodie" />
                <h3>Brown Hoodie</h3>
                <h3>$30,00</h3>
                <a className="addToCart cart2" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo3} alt="blue hoodie" />
                <h3>Royal Blue Hoodie</h3>
                <h3>$40,00</h3>
                <a className="addToCart cart3" href="#">Add To Cart</a>
            </div>
            <div className="image">
                <img src={photo4} alt="pink hoodie" />
                <h3>Pink Hoodie</h3>
                <h3>$60,00</h3>
                <a className="addToCart cart4" href="#">Add To Cart</a>
            </div>
        </div>
    );
}

export default Home;