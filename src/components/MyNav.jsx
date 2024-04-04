import React, { useState } from 'react'
import logo from "../assets/images/logo.webp";
import Commonbtn from './Commonbtn';

const MyNav = () => {
    const [view, setview] = useState(false);
    function hide() {
        setview(!view)
        document.body.classList.toggle("over-hide")
    }
    return (
        <nav className='bg-nav'>
            <div className="container d-flex align-items-center justify-content-between">
                <a href="#">
                    <img width={221} height={38} src={logo} alt="logo" />
                </a>
                <div className='d-flex align-items-center gap-40'>
                    <ul className={`m-0 p-0 d-flex align-items-center gap-4 mobileView ${view ? "start-0" : "left-100"} `}>
                        <li><a href="#home" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>Home</a></li>
                        <li><a href="#about" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>About Us</a></li>
                        <li><a href="#service" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>Services</a></li>
                        <li><a href="#choose" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>Why Choose Us</a></li>
                        <li><a href="#blogs" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>Blogs</a></li>
                        <li><a href="#faq" className="c-primery-low opacity-70 fw-normal fs-sm Exo-2 leading-sm" onClick={hide}>FAQ</a></li>
                        <li className='d-block d-sm-none'>
                            <Commonbtn btn="Contact Us" />
                        </li>
                    </ul>
                    <div className='d-flex gap-3 align-items-center'>
                        <div className='d-sm-block d-none'>
                            <Commonbtn btn="Contact Us" />
                        </div>
                        {view ? (<label className='menu position-relative d-lg-none' onClick={hide}><span className='fs-lg c-light Outfit'>X</span></label>) : (<label className='d-flex d-lg-none flex-column gap-1 position-relative menu' onClick={hide}>
                            <span className='icon'></span>
                            <span className='icon'></span>
                            <span className='icon'></span>
                        </label>)}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MyNav
