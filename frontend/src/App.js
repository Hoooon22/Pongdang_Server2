import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, Contents, Slider } from "./components/Main";

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="mainPage">
            <MainTop/>
            <Slider/>
            <Contents/>
            <img className="sectionLine" src="/imgs/Main/MainImage2/6_sectionLine.png" />
            <div className="content">
                <BrowserView>
                    데스크톱 화면 입니다!!!!!!!!!
                </BrowserView>
                <MobileView>
                    모바일 화면 입니다?
                </MobileView>
                백엔드에서 가져온 데이터입니다?! : {hello}
            </div>
        </div>
    );
}

export default App;