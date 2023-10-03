import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./interviews.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, ContactUs } from "../../components/Main";

function interviews() {

    return (
        <div>
            <MainTop/>
            <ContactUs/>
        </div>
    );
}

export default interviews;