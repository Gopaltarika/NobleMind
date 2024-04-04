import React, { useState } from "react";
import backtopicon from "../assets/images/backtopicon.svg";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="border-0 justify-content-center align-items-center backtop position-fixed z-3"
                onClick={scrollToTop}
                style={{
                    display: visible ? "block" : "none",
                }}
            >
                <img className="img-back w-100" src={backtopicon} alt="backtoptop" />
            </button>
        </div>
    );
};

export default BackToTop;