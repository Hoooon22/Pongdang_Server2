import React from 'react';
import "./MainTop.css";

export default function MainTop() {
    return (
        <div className="topDiv">
            <img className="logo" src="/imgs/Main/MainImage2/1_퐁당로고.png"/>
            <img className="hr_image" src="/imgs/Main/MainImage2/2_구분선.png"/>
            <div className="menu">
                <ul>
                    <li>주제글</li>
                    <li>인터뷰</li>
                    <li>기획</li>
                    <li>유튜브</li>
                </ul>
            </div>
        </div>
    );
}