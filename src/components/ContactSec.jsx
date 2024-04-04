import React from 'react'
import Commonbtn from './Commonbtn'
import contact from "../assets/images/contact-img.webp";

const ContactSec = () => {
    return (
        <div>
            <div className="container my-150">
                <div className="row" id="contact">
                    <div className="col-lg-5">
                        <h2 className='fs-lg Outfit c-primery-low m-0' data-aos="fade-down"><span className='fw-semibold'>Contact</span><span className='fw-light'>  Us</span></h2>
                        <p className='m-0 fw-normal fs-sm Exo-2 c-primery-low pt-sm-3' data-aos="fade-down">Feel free to contact us any time . We will get back to you <span className='d-sm-block'>as soon as we can!</span> </p>
                        <form className='mt-3'>
                            <div className='w-100 d-flex align-items-center gap-2' data-aos="fade-down">
                                <div className='w-100'>
                                    <label htmlFor="name" className='mb-2'>Name</label> <br />
                                    <input className='w-100 input-type' name='name' id='name' type="text" required />
                                </div>
                                <div className='w-100 ms-1'>
                                    <label htmlFor="Last" className='mb-2'>Last</label> <br />
                                    <input className='w-100 input-type' name='Last' id='Last' type="text" required />
                                </div>
                            </div>
                            <label htmlFor="email" className='mb-2 mt-3' data-aos="fade-down">Email</label>
                            <input name='email' id='email' className='w-100 input-type' type="email" required data-aos="fade-down" />
                            <label htmlFor="massage" className='mb-2 mt-3' data-aos="fade-down">Massage</label>
                            <textarea name="massage" id="massage" className='w-100 mb-4' required data-aos="fade-down"></textarea>
                            <Commonbtn btn="Submit" />
                        </form>
                    </div>
                    <div className="col-lg-7 pt-lg-0 pt-4 d-flex justify-content-center ">
                        <img className='w-100 max-w-592 img-sort' data-aos="zoom-in-up" src={contact} alt="contact-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSec
