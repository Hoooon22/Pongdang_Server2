import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./testPost.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainTop, ContactUs } from "../../../components/Main";
import { Search } from "../../../components/interviews";
import { PostTest } from "../../../components/posts";

function testPost() {

    return (
        <div>
            <MainTop />
            <div className="posts-container">
                <PostTest />
            </div>
            <ContactUs />
        </div>
    );
}

export default testPost;