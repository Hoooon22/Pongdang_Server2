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
                <p ref={pRef} style={{ color: '#2791E8', fontWeight: 'bold' }}>두려움</p>
            </div>

            <img src="/imgs/posts/scare.png"/>

            <div className="body_post" style={{ fontSize: `${textSize*0.8}vw`, marginTop: '5%' }}>
                <p>
                    처음 보는 번호의 버스를 타는 일,<br/><br/>
                    생소한 제목의 영화를 재생하는 일.<br/><br/>
                    반복되던 일상과는 다른 선택을 할 때면 설레면서도 두려워져.<br/><br/>
                    ‘길을 잃어서 시간을 낭비하면 어쩌지?’, ‘원치 않는 장면들과 마주하면 어쩌지?’ 하는 걱정들이 마음 한 켠에 있으니까.<br/><br/>
                    인생의 작은 선택에서도 이런 감정을 느끼는데, 삶의 큰 줄기인 진로 문제에 있어서는 더 많이 걱정되는 게 당연한 것 같아.<br/><br/>
                    그럼에도 불구하고 어떤 사람들은 가던 길의 반대로 걷기도 하고, 길이 아니었던 곳으로 걷기도 하더라. 우리는 이들에 대한 호기심으로 인터뷰를 시작했고, 그들이 느꼈을 두려움에 관해서 직접 들어보기로 했어. 새로운 길을 앞에 두고 망설이고 있는 이들에게 우리 인터뷰를 통해 ‘모두가 두려웠지만 도전했다’는 메시지를 주고 싶었거든.<br/><br/>
                    그런데, 막상 인터뷰를 진행해 보니 새로운 선택을 한 이들은 두렵다고 말하지 않았어. 이들은 두려움보다 앞으로 이어질 여정을 기대하는 마음에 더 집중하고 있더라.<br/><br/>
                    처음에는 ‘주제 선정을 잘못 한 걸까?’ 싶었지만 이내 우린 더욱 신나는 마음으로 작업을 시작했어. 두려움보다는 기대하는 마음에 집중하면서 말이지. 가지 않았던 길을 눈앞에 두고 망설이는 이들에게 이런 모습이 줄 수 있는 메시지가 분명히 있을 거라고 생각해. 6명의 이야기를 통해 용기와 열정을, 그리고 나만의 통찰을 얻게 되기를!<br/><br/>
                    **그리고 우리 퐁당 매거진은 이제 평어(동등한 관계를 만드는 언어)를 사용하려고 해. 꿈을 이루는 데에 늦은 때는 없다는 메시지를 가지고 있는 우리인데, 존댓말을 쓰는 것은 어색하더라고. 우린 우리의 꿈 앞에서 모두 동등하니까!<br/><br/>
                    두 번째 돌로 들어가며, 퐁당 메이커스

                </p>
            </div>
        </div>
    )
}