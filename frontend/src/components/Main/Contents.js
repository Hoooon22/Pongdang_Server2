import React, { useState, useEffect } from 'react';
import './Contents.css';
import Button from 'react-bootstrap/Button';

export default function Contents() {
  const [textSize, setTextSize] = useState(2);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/imgs/Main/1_1.png';
    setImage(img);

    img.onload = () => handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (!image) return;

    const imgHeight = image.height;
    const txtBoxHeight = document.querySelector('.textbox').offsetHeight;
    const newSize = txtBoxHeight * 0.9 / imgHeight * 100;
    setTextSize(newSize);
  };

  return (
    <div className="content_div">
      <div className="title" style={{ fontSize: `${textSize*2}vw` }}>
        <p>이번 호의 주제글</p>
      </div>

      <div className="contents">
        <img className="title_img" src="/imgs/Main/1_1.png" alt="이번 호의 주제글" />
        <div className="textbox">
            <div className="subtitle" style={{ fontSize: `${textSize*1.5}vw` }}>
                <p>두려움</p>
            </div>
            <div className="details" style={{ fontSize: `${textSize}vw` }}>
              <p>
                에디터가 이 글을 추천하는 이유는 추천하기 때문인데요 아무리 생각 해와노 주선하는 이유는 주선하기 때문입니다
                실제 예를 들어서 지금 ..주전은 어떤 의미들 지니는 지 설명드릴 수 있을 것 같은데요 뿡
                주전하기 때문인데요 아무리 생각 해봐도 추천하는 이유는 추천하기
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}
