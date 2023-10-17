import React, { useEffect, useState } from 'react';

import "./Result.css";

export default function SearchBar() {
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        fetch('/v1/interview') // Endpoint
            .then(response => response.json())
            .then(data => setInterviews(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="Result_Search">
            {/* interviews 배열에 맞게 데이터 렌더링 */}
            {interviews.map(interview => (
                <div key={interview.id}>
                    <h3>{interview.interview_title}</h3>
                    <p>{interview.interviewee}</p>
                </div>
            ))}
        </div>
    )
}