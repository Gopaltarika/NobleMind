import React from 'react'
import star from "../assets/images/star.svg";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import chooseimg from "../assets/images/chooseSec-img.webp";
import ellipis from "../assets/images/ellipis,.svg";
const ChooseSec = () => {
    return (
        <div className='position-relative'>
            <img className='position-absolute start-5 ellipis' src={ellipis} alt="ellipis" />
            <img className='position-absolute bottom-0 ellipis end-2' src={ellipis} alt="ellipis" />
            <div className="container position-relative z-1" id="choose">
                <div className="d-flex align-items-center justify-content-center" data-aos="fade-down">
                    <img src={star} alt="star" />
                    <p className='m-0 Exo-2 fw-normal fs-sm lh-sm c-primery-low ms-2'>Why Choose Us</p>
                </div>
                <h2 className='fs-lg Outfit c-primery-low pt-2 m-0 text-center' data-aos="fade-down"><span className='fw-light'>Driving Innovation &</span><span className='fw-semibold d-block'> Transforming Industries</span></h2>
                <Swiper
                    data-aos="fade-down"
                    modules={[Pagination, A11y, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    className='py-5 mb-3'
                    loop={true}
                    autoplay={{ delay: 2000 }}
                    centeredSlides={true}
                    pagination={{ clickable: true, type: 'bullets', dynamicBullets: true, dynamicMainBullets: 3  }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className='slide-card'>
                        <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="18" cy="18" r="18" fill="#A854E9" fillOpacity="0.24" />
                            <circle cx="18" cy="18" r="12" fill="#FDFDFF" />
                            <path d="M17.0443 26V12H20.0002V26H17.0443ZM14.0002 14.3499V12H19.7796V14.3499H14.0002Z" fill="url(#paint0_linear_101_478)" />
                            <defs>
                                <linearGradient id="paint0_linear_101_478" x1="14.6847" y1="7.39677" x2="43.4441" y2="18.0642" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A854E9" />
                                    <stop offset="1" stopColor="#4F91FC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </span>
                        <h3 className='fw-normal fs-md Outfit c-primery-low m-0 mt-2 pt-1'>Customer-Centric</h3>
                        <p className='m-0 c-primery-low fw-normal Exo-2 fs-sm lh-sm pt-1'>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                    </SwiperSlide>
                    <SwiperSlide className='slide-card'>
                        <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="18" cy="18" r="18" fill="#A854E9" fillOpacity="0.24" />
                            <circle cx="18" cy="18" r="12" fill="#FDFDFF" />
                            <path d="M14 22.6891L18.3089 18.0336C18.6125 17.6975 18.8564 17.4006 19.0407 17.1429C19.2358 16.8739 19.3767 16.6218 19.4634 16.3866C19.5501 16.1401 19.5935 15.8936 19.5935 15.6471C19.5935 15.1541 19.4363 14.7675 19.122 14.4874C18.8184 14.2073 18.4228 14.0672 17.935 14.0672C17.4363 14.0672 16.9919 14.2017 16.6016 14.4706C16.2222 14.7395 15.8645 15.1653 15.5285 15.7479L14.0163 14.4202C14.4715 13.6246 15.0352 13.0252 15.7073 12.6218C16.3902 12.2073 17.1707 12 18.0488 12C18.7967 12 19.4472 12.1513 20 12.4538C20.5637 12.7563 20.9973 13.1765 21.3008 13.7143C21.6043 14.2521 21.7561 14.8796 21.7561 15.5966C21.7561 16.0784 21.6965 16.5154 21.5772 16.9076C21.4688 17.2997 21.2791 17.6919 21.0081 18.084C20.748 18.465 20.3848 18.8964 19.9187 19.3782L16.7805 22.6891H14ZM14 24V22.6891L15.8862 22.0168H22V24H14Z" fill="url(#paint0_linear_101_488)" />
                            <defs>
                                <linearGradient id="paint0_linear_101_488" x1="14.9127" y1="8.05437" x2="47.6392" y2="26.9371" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A854E9" />
                                    <stop offset="1" stopColor="#4F91FC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </span>
                        <h3 className='fw-normal fs-md Outfit c-primery-low m-0 mt-2 pt-1'>Workplace Harmony</h3>
                        <p className='m-0 c-primery-low fw-normal Exo-2 fs-sm lh-sm pt-1'>Create a nurturing and peaceful environment, fostering growth, well-being. We are more than a team; we are a family.</p>
                    </SwiperSlide>
                    <SwiperSlide className='slide-card'>
                        <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="18" cy="18" r="18" fill="#A854E9" fillOpacity="0.24" />
                            <circle cx="18" cy="18" r="12" fill="#FDFDFF" />
                            <path d="M18.1721 25C17.3097 25 16.5202 24.8481 15.8036 24.5442C15.087 24.2281 14.4858 23.7784 14 23.195L15.6397 21.5722C15.8826 21.9369 16.2287 22.2286 16.6781 22.4474C17.1275 22.6662 17.6134 22.7756 18.1356 22.7756C18.6215 22.7756 19.0405 22.6905 19.3927 22.5203C19.7449 22.338 20.0182 22.0888 20.2126 21.7728C20.419 21.4446 20.5223 21.0678 20.5223 20.6424C20.5223 20.1926 20.419 19.8097 20.2126 19.4937C20.0182 19.1777 19.7328 18.9345 19.3563 18.7644C18.9798 18.5942 18.5304 18.5091 18.0081 18.5091C17.7773 18.5091 17.5405 18.5273 17.2976 18.5638C17.0547 18.5881 16.8482 18.6307 16.6781 18.6914L17.7713 17.3057C18.0749 17.2085 18.3725 17.1295 18.664 17.0687C18.9676 16.9958 19.247 16.9593 19.502 16.9593C20.1579 16.9593 20.747 17.1173 21.2692 17.4334C21.8036 17.7373 22.2227 18.1748 22.5263 18.7461C22.8421 19.3053 23 19.9677 23 20.7335C23 21.5844 22.7996 22.3319 22.3988 22.9762C21.998 23.6082 21.4332 24.1066 20.7045 24.4712C19.9879 24.8237 19.1437 25 18.1721 25ZM16.6781 18.6914V17.2693L19.9575 13.4586L22.7996 13.4222L19.4109 17.3057L16.6781 18.6914ZM14.7105 14.1515V12H22.7996V13.4222L20.7773 14.1515H14.7105Z" fill="url(#paint0_linear_101_498)" />
                            <defs>
                                <linearGradient id="paint0_linear_101_498" x1="15.0267" y1="7.72557" x2="51.137" y2="29.3619" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A854E9" />
                                    <stop offset="1" stopColor="#4F91FC" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </span>
                        <h3 className='fw-normal fs-md Outfit c-primery-low m-0 mt-2 pt-1'>Ethical Leadership</h3>
                        <p className='m-0 c-primery-low fw-normal Exo-2 fs-sm lh-sm pt-1'>Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.</p>
                    </SwiperSlide>
                    <SwiperSlide className='slide-card'>
                        <span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle opacity="0.5" cx="18" cy="18" r="18" fill="#A854E9" fillOpacity="0.24" />
                            <circle cx="18" cy="18" r="12" fill="#FDFDFF" />
                            <path d="M17.0443 26V12H20.0002V26H17.0443ZM14.0002 14.3499V12H19.7796V14.3499H14.0002Z" fill="url(#paint0_linear_101_478)" />
                            <defs>
                                <linearGradient id="paint0_linear_101_478" x1="14.6847" y1="7.39677" x2="43.4441" y2="18.0642" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#A854E9" />
                                    <stop offset="1" stopColor="#4F91FC" />
                                </linearGradient>
                            </defs>
                        </svg></span>
                        <h3 className='fw-normal fs-md Outfit c-primery-low m-0 mt-2 pt-1'>Customer-Centric</h3>
                        <p className='m-0 c-primery-low fw-normal Exo-2 fs-sm lh-sm pt-1'>Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.</p>
                    </SwiperSlide>
                </Swiper>
                <img className='w-100 img-sort' data-aos="flip-up" src={chooseimg} alt="chosse-sec-img" />
            </div>
        </div>
    )
}

export default ChooseSec
