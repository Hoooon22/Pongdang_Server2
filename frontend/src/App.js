import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main/Main";
import Test from "./pages/Test/Test";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" export component={Main} />
                <Route path="/test" component={Test}/>
            </div>
        </BrowserRouter>
    );
}

export default App;