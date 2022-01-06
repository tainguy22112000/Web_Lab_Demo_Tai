import React from 'react';
import { Button } from './Button';
import './Footer.css'

function Footer () {
    return (
        <div className = 'footer-container'>
            <section className = 'footer-subcription'>
                <p className = 'footer-subcription-heading'>
                    Join the Adventure
                </p>

                <p className = 'footer-subcription-text'>
                    Terms
                </p>

                <div className = 'input-areas'>
                    <form>
                        <input type = 'email' name = 'email' placeholder = 'Your Email' className = 'footer-input'></input>
                        <Button buttonStyle = 'btn--outline'> Subcribe</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer;