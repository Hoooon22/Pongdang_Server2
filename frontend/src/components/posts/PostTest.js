import React, { useEffect, useState, useRef } from 'react';

import "./PostTest.css";

export default function PostTest() {
  const [textSize, setTextSize] = useState(2);
  const pRef = useRef(null);
  const titleBoxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (pRef.current && titleBoxRef.current) {
        const pHeight = pRef.current.clientHeight * 0.7;
        const titleBoxWidth = pHeight / 4;
        titleBoxRef.current.style.height = pHeight + 'px';
        titleBoxRef.current.style.width = titleBoxWidth + 'px';
      }
    };

    handleResize(); // 초기 렌더링 시 크기 조정

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div className="postTest">
            <div className="title_post" style={{ fontSize: `${textSize*1.1}vw` }}>
                <div className="title_box" ref={titleBoxRef}></div>
                <p ref={pRef} style={{ color: '#2791E8', fontWeight: 'bold' }}>두번째 돌</p>
            </div>

            <img src="/imgs/posts/scare.png"/>

            <div style={{ fontSize: `${textSize*0.8}vw`, marginTop: '5%' }}>
                <p>
                    야 무대가리 저건 하울의 성 아니야? 집을 찾아달랬더니 하울의 성을! 이게 성이야? 정말 괴상한데 거기가 문이군 좀 기다려 잠깐만! 들어오란 거야, 뭐야?<br/>
                    내 숄! 안은 따뜻해 보이니 일단 들어갈게, 고마워 하도 할망구 심장은 안 먹겠지 이젠 정말 안녕 착한 순무 허수아비야 행복해야 해<br/>
                    야 무대가리 저건 하울의 성 아니야? 집을 찾아달랬더니 하울의 성을! 이게 성이야? 정말 괴상한데 거기가 문이군 좀 기다려 잠깐만! 들어오란 거야, 뭐야?<br/>
                    내 숄! 안은 따뜻해 보이니 일단 들어갈게, 고마워 하도 할망구 심장은 안 먹겠지 이젠 정말 안녕 착한 순무 허수아비야 행복해야 해<br/><br/><br/>

                    야 무대가리 저건 하울의 성 아니야? 집을 찾아달랬더니 하울의 성을! 이게 성이야? 정말 괴상한데 거기가 문이군 좀 기다려 잠깐만! 들어오란 거야, 뭐야?<br/>
                    내 숄! 안은 따뜻해 보이니 일단 들어갈게, 고마워 하도 할망구 심장은 안 먹겠지 이젠 정말 안녕 착한 순무 허수아비야 행복해야 해<br/>
                    야 무대가리 저건 하울의 성 아니야? 집을 찾아달랬더니 하울의 성을! 이게 성이야? 정말 괴상한데 거기가 문이군 좀 기다려 잠깐만! 들어오란 거야, 뭐야?<br/>
                    내 숄! 안은 따뜻해 보이니 일단 들어갈게, 고마워 하도 할망구 심장은 안 먹겠지 이젠 정말 안녕 착한 순무 허수아비야 행복해야 해<br/><br/><br/>
                </p>
            </div>
        </div>
    )
}