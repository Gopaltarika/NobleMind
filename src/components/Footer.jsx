import React from 'react'
import logo from "../assets/images/foot-logo.webp";
import fb from "../assets/images/fb.svg";
import insta from "../assets/images/insta.svg";
import twitr from "../assets/images/twitr.svg";
import linkdin from "../assets/images/link.svg";
const Footer = () => {
    const year = new Date();
    const y = year.getFullYear();
    return (
        <div className='foot-bg'>
            <div className="container pt-138 pb-5 mb-1">
                <div className="row">
                    <div className="col-md-4">
                        <a className='mb-1' href="#"><img width={241} height={42} src={logo} alt="logo" /></a>
                        <p className='m-0 Exo-2 fw-normal fs-sm text-white pt-4'>Follow Us</p>
                        <div className="d-flex gap-3 pt-2">
                            <a className='icon-hover' href="https://www.facebook.com/" target='_blank'><img src={fb} alt="fb" /></a>
                            <a className='icon-hover' href="https://www.instagram.com/" target='_blank'><img src={insta} alt="insta" /></a>
                            <a className='icon-hover' href="https://twitter.com/i/flow/login" target='_blank'><img src={twitr} alt="twitr" /></a>
                            <a className='icon-hover' href="https://www.linkedin.com/feed/" target='_blank'><img src={linkdin} alt="linkdin" /></a>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex mt-md-0 mt-4 justify-content-md-end">
                        <div className='row max-w-315'>
                            <div className='col-6'>
                                <p className='m-0 Outfit fw-semibold fs-sm text-white pb-3'>Maine</p>
                                <ul className='m-0 p-0'>
                                    <li className=''><a href="#home" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">Home</a></li>
                                    <li className='mt-14'><a href="#about" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">About Us</a></li>
                                    <li className='mt-14'><a href="#service" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">services</a></li>
                                    <li className='mt-14'><a href="#choose" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal text-nowrap">Why Choose Us</a></li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <p className='m-0 Outfit fw-semibold fs-sm text-white pb-3'>Legal</p>
                                <ul className='m-0 p-0'>
                                    <li className=''><a href="#" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal text-nowrap">Term & Conduction</a></li>
                                    <li className='mt-14'><a href="#" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">Privacy Policy</a></li>
                                    <li className='mt-14'><a href="#contact" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">Contact</a></li>
                                    <li className='mt-14'><a href="tel:+(629) 555-0129" className="opacity-70 c-tertiry fs-sm Exo-2 fw-normal">(629) 555-0129</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 foot-date pb-2">
                <p className='m-0 text-white opacity-70 fw-normal Exo-2 fs-xs text-center pt-3 pb-4'>© Copyright {y} Noble Mind | All rights reserved. </p>
            </div>
        </div>
    )
}

export default Footer
