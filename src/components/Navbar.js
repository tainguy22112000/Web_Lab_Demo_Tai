import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => setClick(!click);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',showButton);
    return(
        <>
        <nav className = "navbar">
            <div className = "navbar-container">   
                <Link to = '/' className = "navbar-logo" onClick={closeMobileMenu}>
                    BioMechLab<i className = "fab fa-typo3"/>
                </Link>
            
                <div className ="menu-icon" onClick = {handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>

                <ul className = {click ? 'nav-menu active': 'nav-menu'}>
                    
                    <li className = 'nav-item'>
                        <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>
                          <i className = 'fas fa-home'/>Home
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/resources' className = 'nav-links' onClick = {closeMobileMenu}>
                        <i className = 'fas fa-network-wired'/>Resources
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/project' className = 'nav-links' onClick = {closeMobileMenu}>
                        <i className = 'fas fa-tasks'/>Projects
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/courses' className = 'nav-links' onClick = {closeMobileMenu}>
                        <i className = 'fas fa-book-reader'/>Courses
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/sign-up' className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>

                </ul>
                {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
                {/* <button class = "btn-sign-up">SIGN UP</button> */}
            </div>
        </nav>
        </>
    );
}

export default Navbar;