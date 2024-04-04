import React from 'react'
import star from "../assets/images/star.svg";


const Header = () => {
    return (
        <div className='d-flex flex-grow-1 align-items-center position-relative overflow-hidden'>
            <div className="container position-relative z-1" id="home">
                <div className="d-flex align-items-center" data-aos="fade-right">
                    <img src={star} alt="star" />
                    <p className='m-0 Exo-2 fw-normal fs-sm leading-sm c-primery-low ms-2'>AI With Noble Mind</p>
                </div>
                <h1 className='m-0 text-black Outfit fs-xl pt-2' data-aos="fade-right"><span className='fw-light'>Inspiring Innovation,</span><span className='d-sm-block fw-light '> Elevating Solutions –</span> <span className='fw-bolder d-sm-block fs-lg'>Noble Mind"</span></h1>
                <p className='m-0 Exo-2 fs-sm fw-normal leading-sm text-black max-w-584 pt-3 opacity-70' data-aos="fade-right">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
            </div>
        </div>
    )
}

export default Header
