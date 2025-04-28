import React from 'react';
import '../styles/promo-section.css'; 
import { Link } from 'react-router-dom';

const PromoSection = () => {
    return (
        <section className="promo-section">
            <div className="promo-image-overlay"></div>
            
            <div className="promo-content">
                <h1 className="promo-heading1">Are you</h1>
                <h2 className="promo-heading2">An Experienced Mechanic or A Trustworthy Car Parts Dealer</h2>
                <p className="promo-paragraph">
                    Let us help you make more money by connecting you to car owners looking to repair and buy parts!
                </p>
                <Link to="#promo"><button className="promo-button">Register for free!</button></Link>
            </div>
        </section>
    );
};

export default PromoSection;
