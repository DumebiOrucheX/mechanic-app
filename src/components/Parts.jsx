import React, { useState } from 'react';
import '../styles/parts.css';
import { FaHeart, FaStar, FaRegStar } from 'react-icons/fa';

const itemsData = [
    { id: 1, rating: 4, price: '₦25,000', filledHeart: false, title: 'TOYOTA - Corolla<br />Shock Absorbers', image: './images/tools1.png' },
    { id: 2, rating: 4, price: '₦80,000', filledHeart: false, title: 'BMW - Sports<br />Indicator Lights', image: './images/tools1.png' },
    { id: 3, rating: 2, price: '₦100,000', filledHeart: true, title: 'Audi - AC<br />Break Pad Test', image: './images/tools1.png' },
    { id: 4, rating: 3, price: '₦25,000', filledHeart: true, title: 'Universal<br />17 - 205 - 190 Tyre', image: './images/tools1.png' },
    { id: 5, rating: 4, price: '₦250,000', filledHeart: false, title: 'LandRover -<br /> Range Rover<br />Break Set', image: './images/tools1.png' },
    { id: 6, rating: 4, price: '₦25,000', filledHeart: false, title: 'TOYOTA - Corolla<br />Shock Absorbers', image: './images/tools1.png' },
    { id: 7, rating: 4, price: '₦80,000', filledHeart: false, title: 'BMW - Sports<br />Indicator Lights', image: './images/tools1.png' },
    { id: 8, rating: 2, price: '₦100,000', filledHeart: true, title: 'Audi - AC<br />Break Pad Test', image: './images/tools1.png' },
    { id: 9, rating: 3, price: '₦25,000', filledHeart: true, title: 'Universal<br />17 - 205 - 190 Tyre', image: './images/tools1.png' },
    { id: 10, rating: 3, price: '₦250,000', filledHeart: false, title: 'LandRover -<br /> Range Rover<br />Break Set', image: './images/tools1.png' }
];

const Parts = () => {
    return (
        <div className="parts-container">
            <h2 className="parts-heading">Parts and Accessories</h2>
            <div className="parts-info-section">
                <div className="parts-info-text">
                    <p>
                        Shop for quality parts both New and Tokumbo and get them delivered to your doorsteps.
                    </p>
                </div>
                <div className="parts-store-links">
                    <img src="./images/playstore.png" alt="Google Play Store" className="parts-store-icon" />
                    <img src="./images/appstore.png" alt="Apple App Store" className="parts-store-icon" />
                </div>
                <br />
            </div>
            <div className="parts-grid">
                {itemsData.map((item) => (
                    <div key={item.id} className="part-item">
                        <div className="part-top">
                            <FaHeart 
                                className={`heart-icon ${item.filledHeart ? 'filled' : 'outlined'}`} 
                            />
                            <div className="parts-new-tag">New</div>
                        </div><br />
                        <img src={item.image} alt="Part" className="part-image" />
                        <div className="part-rating">
                            {Array.from({ length: 5 }, (_, index) =>
                                index < item.rating ? <FaStar key={index} className="star filled" /> : <FaRegStar key={index} className="star" />
                            )}
                        </div>
                        <div className="part-text">
                            <strong className="part-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className="part-price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Parts;
