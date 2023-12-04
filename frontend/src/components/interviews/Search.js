import React, { useEffect, useState } from 'react';

import "./Search.css";

export default function Search() {
    const [interviews, setInterviews] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [textSize, setTextSize] = useState(2);
    const [imageHeight, setImageHeight] = useState(0);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetch(`/v1/interview?keyword=${keyword}`) // Endpoint에 쿼리 파라미터 추가
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
      const getImageHeight = () => {
        const img = document.getElementById("search_submit_button");
        if (img) {
          setImageHeight(img.offsetHeight);
          // console.log("imageHeight:", img.offsetHeight); // 디버깅 출력
        }
      };

      const handleResize = () => {
        getImageHeight(); // 윈도우 사이즈 변경 시 이미지 높이 업데이트
      };

      const img = document.getElementById("search_submit_button");
      if (img) {
        img.onload = getImageHeight; // 이미지 로드 시 이미지 높이 업데이트
        window.addEventListener("resize", handleResize); // 윈도우 사이즈 변경 이벤트 리스너 등록
      }

      return () => {
        if (img) {
          img.onload = null; // 컴포넌트 언마운트 시 이미지 로드 이벤트 핸들러 제거
        }
        window.removeEventListener("resize", handleResize); // 컴포넌트 언마운트 시 윈도우 사이즈 변경 이벤트 리스너 제거
      };
    }, []);

    return (
        <div className="Search_Div">
            <div className="SearchBar">
                <input
                    name="search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)} // 입력 필드 값이 변경될 때마다 keyword 상태 업데이트
                    onKeyDown={handleKeyDown} // Enter 키 이벤트 처리 함수 연결
                    placeholder="검색어를 입력하세요."
                    style={{ fontSize: `${textSize*1.1}vw`, height: imageHeight }}
                />
                <button onClick={handleButtonClick}>
                    <img id="search_submit_button" src="/imgs/interviews/리스트_돋보기.png" />
                </button>
            </div>
            <div className="Search_Result">
                {/* interviews 배열에 맞게 데이터 렌더링 */}
                {interviews.map(interview => (
                    <div className="searchList" style={{ fontSize: `${textSize*0.6}vw`}}>
                    <img src="/imgs/interviews/리스트_썸네일.png" />
                        <div>
                            <p style={{ color: '#2791E8' }}>{interview.numRock}</p>
                            <p style={{ fontSize: `${textSize*1.0}vw`, fontWeight: 'bold'}}>{interview.interviewTitle}</p>
                            <p>{interview.subtitle}</p>
                        </div>
                    </div>
                ))}

                <div className="gradation_container">
                    <img src="/imgs/interviews/리스트_그라데이션.png" />
                </div>
            </div>
        </div>
    )
}