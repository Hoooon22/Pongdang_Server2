import React from 'react';
import "./MainTop.css";

export default function MainTop() {
    return (
        <div className="topDiv">
            <img className="logo" src="/imgs/MainTop/1 맨-위의-로고.png"/>
            <hr/>
            <div className="menu">
                <ul>
                    <li>주제글</li>
                    <li>인터뷰</li>
                    <li>기획</li>
                    <li>유튜브?</li>
                </ul>
            </div>
        </div>
    );
}