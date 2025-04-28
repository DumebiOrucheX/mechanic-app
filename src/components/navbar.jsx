import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Handle window resize to reset menu state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false); 
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="navbar">
            <Link to='/'><img src="./logo.png" alt="Logo" className='nav-logo' /></Link>

            <div className="burger-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li className="nav-item">
                    <Link to="/#repair" onClick={() => setIsOpen(false)}>
                        REPAIR 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/#service" onClick={() => setIsOpen(false)}>
                        SERVICE 
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/#buy" onClick={() => setIsOpen(false)}>
                        BUY
                    </Link>
                </li>
                
                <div className="nav-right">
                    <li className="nav-item">
                        <Link to="/#about-us" onClick={() => setIsOpen(false)}>
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/#contact-us" onClick={() => setIsOpen(false)}>
                            Contact Us
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}
