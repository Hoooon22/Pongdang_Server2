import React, { useEffect, useState } from 'react';

import "./Search.css";

export default function Search() {
    const [interviews, setInterviews] = useState([]);
    const [keyword, setKeyword] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetch(`/v1/interview?keyword=${keyword}`) // Endpoint에 쿼리 파라미터 추가
                .then(response => response.json())
                .then(data => setInterviews(data))
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="Search_Div">
            <div className="SearchBar">
                <input
                    name="search"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)} // 입력 필드 값이 변경될 때마다 keyword 상태 업데이트
                    onKeyDown={handleKeyDown} // Enter 키 이벤트 처리 함수 연결
                    placeholder="검색어를 입력하세요."
                />
            </div>
            <div className="Search_Result">
                {/* interviews 배열에 맞게 데이터 렌더링 */}
                {interviews.map(interview => (
                    <div key={interview.id}>
                        <h3>{interview.interview_title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}