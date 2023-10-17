import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./interviews.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, ContactUs } from "../../components/Main";
import { SearchBar, Result } from "../../components/interviews";

function interviews() {

    return (
        <div>
            <MainTop/>
            <div className="searchDiv">
                <SearchBar/>
                <Result/>
            </div>
            <ContactUs/>
        </div>
    );
}

export default interviews;