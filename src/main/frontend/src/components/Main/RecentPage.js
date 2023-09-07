import React, { useState, useEffect } from 'react';
import './RecentPage.css';
import Button from 'react-bootstrap/Button';

export default function RecentPage() {
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
    <div className="recentPage_div">
      <div className="title" style={{ fontSize: `${textSize*1.5}vw` }}>
        <p>최근 업로드된 글</p>
      </div>

      <div className="recent_contents">
        <div>
            <div className="date_div">
                <img src="/imgs/Main/MainImage2/8_date.png" />
            </div>
            <div className="text_div">
                <p className="title_p" style={{ fontSize: `${textSize*1.1}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
                <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
            </div>
            <img className="title_img" src="/imgs/Main/5.png" />
        </div>
        <div>
            <div className="date_div">
                <img src="/imgs/Main/MainImage2/8_date.png" />
            </div>
            <div className="text_div">
                <p className="title_p" style={{ fontSize: `${textSize*1.1}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
                <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
            </div>
            <img className="title_img" src="/imgs/Main/6.png" />
        </div>
        <div>
            <div className="date_div">
                <img src="/imgs/Main/MainImage2/8_date.png" />
            </div>
            <div className="text_div">
                <p className="title_p" style={{ fontSize: `${textSize*1.1}vw` }}> 열정으로 엮은 날개 옷, 안시연 </p>
                <p className="viewCount" style={{ fontSize: `${textSize*0.8}vw` }}> view 514 </p>
            </div>
            <img className="title_img" src="/imgs/Main/7.png" />
        </div>
      </div>
    </div>
  );
}
