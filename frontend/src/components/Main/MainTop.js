import React, { useState, useEffect } from 'react';
import "./MainTop.css";

export default function MainTop() {

    const [isInterviewsPage, setIsInterviewsPage] = useState(false);

    useEffect(() => {
            if (window.location.pathname === '/interviews') {
              setIsInterviewsPage(true);
            }
          }, []);

    return (
        <div className="topDiv">
            <a className="logo_a" href="https://stoneinwell.com">
                <img className="logo" src="/imgs/Main/MainImage2/1_logo.png"/>
            </a>

            <img className="hr_image" src="/imgs/Main/MainImage2/2_hrLine.png"/>

            <div className="menu">
                <a className="menu_a" href="https://stoneinwell.com/interviews">
                    <img src="/imgs/Main/MainImage2/3_menu1.png"/>
                </a>

                <a className={`menu_a ${isInterviewsPage ? 'interviews' : ''}`} href="https://stoneinwell.com/interviews">
                    <img src="/imgs/Main/MainImage2/3_menu2.png" alt="인터뷰" />
                </a>

                <a className="menu_a" href="https://stoneinwell.com/interviews">
                    <img src="/imgs/Main/MainImage2/3_menu3.png"/>
                </a>

                <a className="menu_a" href="https://stoneinwell.com/interviews">
                    <img src="/imgs/Main/MainImage2/3_menu4.png"/>
                </a>
            </div>
        </div>
    );
}