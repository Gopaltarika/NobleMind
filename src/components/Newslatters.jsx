import React from 'react'
import ellipis from "../assets/images/ellipis,.svg";

const Newslatters = () => {
    return (
        <div className='position-relative'>
            <img className='ellipis position-absolute top-0 start-5' src={ellipis} alt="ellipis" />
            <div className='bg-newslatter position-relative z-1 container' id="service">
                <h2 className='fs-lg Outfit c-tertiry m-0 text-center' data-aos="zoom-in"><span className='fw-light'>Subscribe to our </span><span className='fw-semibold'>Newsletter!</span></h2>
                <p className='Exo-2 fw-normal lh-sm fs-sm c-tertiry pt-2 m-0 text-center mb-sm-4 mb-3 pb-2' data-aos="zoom-in">Be the first to get exclusive offers and the latest news.</p>
                <form className='news-feature d-flex mx-auto' data-aos="zoom-in">
                    <input className='input-news fs-sm fw-semibold Outfit w-100' type="email" placeholder="Enter your email" required />
                    <button className='btn-2 fw-semibold Outfit fs-sm c-tertiry bg-transparent'>Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Newslatters
