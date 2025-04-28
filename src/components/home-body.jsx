import React from 'react';
import '../styles/home-body.css'; 
import PromoSection from './promo-section';
import Parts from './Parts';

const HomeBody = () => {
    return (
        <>
            <div className="body-content">
            <section className="services-section">
    <h2>What do we do?</h2>
    <div className="image-row">
        <div className="service">
            <img src="./images/tools1.png" alt="Service 1" />
            <p>Automotive Experts<br />Hailing</p>
        </div>
        <div className="service">
            <img src="./images/tools2.png" alt="Service 2" />
            <p>Vehicle Document Registration<br />and Renewal</p>
        </div>
        <div className="service">
            <img src="./images/tools3.png" alt="Service 3" />
            <p>Insurance Claim<br />Processing</p>
        </div>
        <div className="service">
            <img src="./images/tools4.png" alt="Service 4" />
            <p>Towing Van Hailing</p>
        </div>
    </div>
</section>


                <section className="info-section">
                    <div className="info-text">
                        <p>Find Mechanics, Electricians&#40;rewire&#41;, Painters, AC Specialists, Panel Beaters, Sound Specialists, Upholstery, Vulcanizers, Programmers, Car Cleaning, Detailing Specialists, and more.</p>
                    </div>
                    
                    <div className="store-links">
                        <img src="./images/playstore.png" alt="Google Play Store" className="store-icon" />
                        <img src="./images/appstore.png" alt="Apple App Store" className="store-icon" />
                    </div>
                </section>
                <PromoSection />
                <section>
                    <Parts />
                </section>
            </div>
        </>
    );
};

export default HomeBody;
