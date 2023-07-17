import React from 'react';
import "./Contents.css";
import Button from 'react-bootstrap/Button';

export default function Contents() {
    return (
        <div className="contents">
            <img className="title_img" src="/imgs/Main/1_1.png"/>
            <div className="textbox">
            <h1>두려움</h1>
            <p>에디터가 이 글을 추천하는 이유는 추천하기 때문인데요 아무리 생각
               해와노 주선하는 이유는 주선하기
               때문입니다 실제 예를 들어서 지금
               ..주전은 어떤 의미들 지니는 지 설명드릴 수 있을 것 같은데요 뿡 주전하기 때문인데요 아무리 생각 해봐도 추천하는 이유는 추천하기</p>
            </div>
        </div>
    );
}