import React, { useState, useEffect } from 'react';
import "./ContactUs.css";

export default function ContactUs() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [isSpecialPage, setIsSpecialPage] = useState(false);

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // 컴포넌트가 unmount될 때 이벤트 리스너를 제거합니다.
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (window.location.pathname === '/interviews' || window.location.pathname.indexOf('/posts') == -1 ) {
          setIsSpecialPage(true);
        }
      }, []);

    return (
    <div className={`ContactUs ${isSpecialPage ? 'special' : ''}`}>
        <img className="contactTopLine" src="/imgs/Main/MainImage2/12_contactusLine.png"/>
        <div className="contactDiv">
            <img className="img1" src="/imgs/Main/MainImage2/10_bottomLogo.png" style={{maxHeight: windowSize.height * 0.1}} />
            <img className="img2" src="/imgs/Main/MainImage2/11_contactus.png" style={{maxHeight: windowSize.height * 0.1}} />
        </div>
    </div>
    );
}