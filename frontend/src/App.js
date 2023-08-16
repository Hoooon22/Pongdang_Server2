import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, Contents, Slider, ContactUs, MostViews, RecentPage, YoutubeBlock, Upcoming } from "./components/Main";

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
            <MostViews/>
            <img className="sectionLine" src="/imgs/Main/MainImage2/6_sectionLine.png" />
            <RecentPage/>
            <YoutubeBlock/>
            <Upcoming/>
            <ContactUs/>
        </div>
    );
}

export default App;