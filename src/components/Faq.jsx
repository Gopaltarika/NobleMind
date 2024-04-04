import React from 'react'
import ellipis from "../assets/images/ellipis,.svg";
const Faq = () => {
    return (
        <div className='position-relative'>
            <img className='position-absolute start-5 top-5 ellipis' src={ellipis} alt="ellipis" />
            <img className='position-absolute end-5 top-50 ellipis' src={ellipis} alt="ellipis" />
            <div className="container position-relative z-1" id="faq">
                <h2 className='fs-lg Outfit c-primery-low m-0 text-center' data-aos="fade-down"><span className='fw-light'>Frequently </span><span className='fw-semibold'>Asked Questions</span></h2>
                <p className='Exo-2 fw-normal leading-sm fs-sm c-primery-low pt-3 opacity-70 m-0 text-center mb-5 pb-1' data-aos="fade-down">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu <span className='d-sm-block'>volutpat mi leo. Nibh nisl consequat metus.</span></p>
                <div className='row justify-content-center'>
                    <div className="accordion col-lg-8" id="accordionExample">
                        <div className="accordion-item" data-aos="fade-down">
                            <h2 className="accordion-header">
                                <button className="accordion-button Outfit fw-medium fs-sm text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Artificial Intelligence (AI)?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body Exo-2 fw-normal fs-sm opacity-70 text-black max-w-680">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3" data-aos="fade-down">
                            <h2 className="accordion-header">
                                <button className="accordion-button Outfit fw-medium fs-sm text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How does AI benefit our company?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body Exo-2 fw-normal fs-sm opacity-70 text-black max-w-680">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3" data-aos="fade-down">
                            <h2 className="accordion-header">
                                <button className="accordion-button Outfit fw-medium fs-sm text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What types of AI technologies are relevant to our industry?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body Exo-2 fw-normal fs-sm opacity-70 text-black max-w-680">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3" data-aos="fade-down">
                            <h2 className="accordion-header">
                                <button className="accordion-button Outfit fw-medium fs-sm text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How can our employees adapt to AI integration?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body Exo-2 fw-normal fs-sm opacity-70 text-black max-w-680">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mt-3" data-aos="fade-down">
                            <h2 className="accordion-header">
                                <button className="accordion-button Outfit fw-medium fs-sm text-black collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How can our company ensure data security with AI?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body Exo-2 fw-normal fs-sm opacity-70 text-black max-w-680">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
