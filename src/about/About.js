import React from 'react';
import './scss/about.scss';

function About () {
    return(
        <div id="about" className='about'>
            <header className='about-header'>
                <div className='about-header-symbol'>
                    <i className='fas fa-users'></i>
                </div>
                <h2>About us</h2>
            </header>
            <div className='about-under-line'></div>
            <section className='about-section-1'>
                <div className='about-section-1-content'>
                    <div className='about-section-1-img-1'></div>
                    <div className='about-section-1-img-2'></div>
                    <div className='about-section-1-text'>
                        <h2>Who are we?</h2>
                        <h3>We just people.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                            mollit anim id est laborum.</p>
                    </div>
                </div>
            </section>
            <div className='about-under-line-revers'></div>
            <footer className='about-footer-main'>
                <div className='about-footer'>
                    <ul className='about-footer-ul'>
                        <li><i className='fab fa-facebook-f about-footer-li'></i></li>
                        <li><i className='fab fa-vk about-footer-li'></i></li>
                        <li><i className='fab fa-linkedin-in about-footer-li'></i></li>
                    </ul>
                    <p>All right reserved &copy;</p>
                </div>
            </footer>
        </div>
    );
}

export default About;