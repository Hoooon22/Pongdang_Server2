import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./interviews.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, ContactUs } from "../../components/Main";
import { Search } from "../../components/interviews";
import Wrapper from '../../components/Wrapper';

function interviews() {

    return (
        <Wrapper>
            <div>
                <MainTop/>
                <div className="searchDiv">
                    <Search/>
                </div>
                <ContactUs/>
            </div>
        </Wrapper>
    );
}

export default interviews;