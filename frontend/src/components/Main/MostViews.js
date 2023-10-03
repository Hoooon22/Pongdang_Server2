import React, { useState, useEffect } from 'react';
import './MostViews.css';
import Button from 'react-bootstrap/Button';

export default function MostViews() {
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
    <div className="mostViews_div">
      <div className="title" style={{ fontSize: `${textSize*1.5}vw` }}>
        <p>지금 많이 보는 글</p>
      </div>

      <div className="contents">
        <div>
            <p className="number" style={{ fontSize: `${textSize*1.1}vw` }}> 1 </p>
            <img className="line" src="/imgs/Main/MainImage2/7_MostViewsLine.png" />
            <img className="title_img" src="/imgs/Main/2.png" />
            <p className="title_p" style={{ fontSize: `${textSize*1.0}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
            <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
        </div>
        <div>
            <p className="number" style={{ fontSize: `${textSize*1.1}vw` }}> 2 </p>
            <img className="line" src="/imgs/Main/MainImage2/7_MostViewsLine.png" />
            <img className="title_img" src="/imgs/Main/3.png" />
            <p className="title_p" style={{ fontSize: `${textSize*1.0}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
            <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
        </div>
        <div>
            <p className="number" style={{ fontSize: `${textSize*1.1}vw` }}> 3 </p>
            <img className="line" src="/imgs/Main/MainImage2/7_MostViewsLine.png" />
            <img className="title_img" src="/imgs/Main/4.png" />
            <p className="title_p" style={{ fontSize: `${textSize*1.0}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
            <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
        </div>
      </div>
    </div>
  );
}
