import React from 'react';
import "./MainTop.css";

export default function MainTop() {
    return (
        <div className="topDiv">
            <img className="logo" src="/imgs/Main/MainImage2/1_logo.png"/>
            <img className="hr_image" src="/imgs/Main/MainImage2/2_hrLine.png"/>
            <div className="menu">
                <img src="/imgs/Main/MainImage2/3_menu1.png"/>
                <img src="/imgs/Main/MainImage2/3_menu2.png"/>
                <img src="/imgs/Main/MainImage2/3_menu3.png"/>
                <img src="/imgs/Main/MainImage2/3_menu4.png"/>
            </div>
        </div>
    );
}