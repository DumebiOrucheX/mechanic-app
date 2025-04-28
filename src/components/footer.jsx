import React from 'react';
import '../styles/footer.css'; 
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer-body'>
                <div className='footer-columns'>
                    <div className='footer-column1'>
                        <p style={{fontSize: '20px'}}>My Oga Mechanic </p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Buy</p>
                    </div>


                    <div className='footer-column2'>
                        <img src="./images/cars.png" id="footer-cars" alt="cars" />
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                &copy; 2024 My Oga Mechanic. All rights reserved.
            </div>
        </footer>
    );
}
