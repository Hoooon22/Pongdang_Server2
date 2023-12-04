import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import "./Search.css";

export default function Search() {
    const [interviews, setInterviews] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [textSize, setTextSize] = useState(2);
    const [imageHeight, setImageHeight] = useState(0);
    const history = useHistory();
    const imgRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetch(`/v1/interview?keyword=${keyword}`)
                .then(response => response.json())
                .then(data => setInterviews(data))
                .catch(error => console.error(error));
        }
    };

    const handleButtonClick = () => {
        fetch(`/v1/interview?keyword=${keyword}`)
            .then(response => response.json())
            .then(data => setInterviews(data))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        const img = imgRef.current;
        if (img) {
            const handleImageLoad = () => {
                setImageHeight(img.offsetHeight);
            };
            if (img.complete) {
                handleImageLoad();
            } else {
                img.addEventListener("load", handleImageLoad);
            }
            window.addEventListener("resize", handleImageLoad);
            return () => {
                img.removeEventListener("load", handleImageLoad);
                window.removeEventListener("resize", handleImageLoad);
            };
        }
    }, []);

    return (
        <div className="Search_Div">
            <div className="SearchBar">
                <input
                    name="search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="검색어를 입력하세요."
                    style={{ fontSize: `${textSize * 1.1}vw`, height: imageHeight }}
                />
                <button onClick={handleButtonClick}>
                    <img ref={imgRef} src="/imgs/interviews/리스트_돋보기.png" alt="검색 버튼" />
                </button>
            </div>
            <div className="Search_Result">
                {interviews.map(interview => (
                    <div
                        className="searchList"
                        style={{ fontSize: `${textSize * 0.6}vw`, cursor: 'pointer' }}
                        onClick={() => history.push(interview.link)}
                    >
                        <img src="/imgs/interviews/리스트_썸네일.png" alt="리스트 썸네일" />
                        <div>
                            <p style={{ color: '#2791E8' }}>{interview.numRock}</p>
                            <p style={{ fontSize: `${textSize * 1.0}vw`, fontWeight: 'bold' }}>{interview.interviewTitle}</p>
                            <p>{interview.subtitle}</p>
                        </div>
                    </div>
                ))}

                <div className="gradation_container">
                    <img src="/imgs/interviews/리스트_그라데이션.png" alt="그라데이션 이미지" />
                </div>
            </div>
        </div>
    )
}
