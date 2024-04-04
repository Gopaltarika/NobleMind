import React from 'react'
import about from "../assets/images/about-img.webp";
import star from "../assets/images/star.svg";
import Commonbtn from './Commonbtn';
import ellipis from "../assets/images/ellipis,.svg";

const About = () => {
    return (
        <div className='position-relative'>
            <img className='position-absolute about-ellipis ellipis' src={ellipis} alt="ellipis" />
            <img className='position-absolute bottom-0 end-5 ellipis' src={ellipis} alt="ellipis" />
            <div className="container position-relative z-1 my-150">
                <div className="row justify-content-center" id="about">
                    <div className="col-lg-6 col-sm-9" data-aos="fade-down">
                        <img className='w-100' src={about} alt="about" />
                    </div>
                    <div className="col-lg-6 col-sm-9 pt-lg-0 pt-4 d-flex align-items-center justify-content-center">
                        <div className='max-w-521'>
                            <div className="d-flex align-items-center" data-aos="fade-down">
                                <img src={star} alt="star" />
                                <p className='m-0 Exo-2 fw-normal fs-sm lh-sm c-primery-low ms-2'>About Us</p>
                            </div>
                            <h2 className='fs-lg Outfit c-primery-low pt-2 m-0' data-aos="fade-down"><span className='fw-light'>Pioneering Vision & Mission-</span><span className='fw-semibold'>Driven Sectoral Innovation</span></h2>
                            <p className='Exo-2 fw-normal lh-sm fs-sm text-black opacity-70 pb-3 m-0 pt-3 mb-sm-4 max-w-491' data-aos="fade-down">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
                            <Commonbtn btn="Read More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
