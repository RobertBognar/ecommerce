import React from 'react';

function Home() {
    return (
        <header>
            <div className="header-overlay"></div>
            <nav>
                <h2>Shop</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li className="cart"><a href="#">Cart 🛒</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Home;