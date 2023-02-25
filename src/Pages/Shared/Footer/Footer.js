import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.png'
import Facebook from '../../../assets/facebook.png'
import Twitter from '../../../assets/twitter.png'
import Instagram from '../../../assets/instagram.png'
import Pinterest from '../../../assets/pinterest.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='bg-[#f1f4f4]'>
            <div className="footer p-10  text-base-content">
                <div>
                    <Link>
                        <img className='w-28' src={Logo} alt="Logo" />
                    </Link>
                    <p className='text-left'>Your mind should be stranger <br /> than your feelings. fly!</p>

                    <div className='social-media flex justify-between w-full'>
                        <div>
                            <img className='w-7' src={Facebook} alt="facebook" />
                        </div>
                        <div>
                            <img className='w-7' src={Twitter} alt="twitter" />
                        </div>
                        <div>
                            <img className='w-7' src={Instagram} alt="instagram" />
                        </div>
                        <div>
                            <img className='w-7' src={Pinterest} alt="pinterest" />
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className="divider"></div>
            <div className='p-10 flex justify-center text-center'>
                <p>Copyright © 2023 - All right reserved by SkyTrip</p>
            </div>
        </footer>
    );
};

export default Footer;