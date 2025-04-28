// HeaderHome Component (header-home.jsx)

import React from 'react';
import Navbar from '../navbar';
import '../../styles/header-home.css';

export default function HeaderHome() {
    return (
        <>
            <header className="header-container">
                <Navbar />
                <div className="header-image-overlay">
                    <div className="background-image">
                        <div className="text-container"><br /><br /><br />
                            <h1 className="heading">Looking for the best autocare?</h1>
                            <p className="subtext">
                                Our technicians are specialists on specific vehicles ranging from German, Japanese, American, and a host of other countries.
                            </p>
                            <div className="store-buttons">
                                <img src="./images/playstore.png" alt="Google Play Store" className="store-img" />
                                <img src="./images/appstore.png" alt="App Store" className="store-img" />
                            </div>
                        </div>
                        <div className="phone-image-container">
                            <img src="./images/apponphones.png" alt="Phone" className="header-phone-image" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
