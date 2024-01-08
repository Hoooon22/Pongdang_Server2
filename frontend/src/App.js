import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main/Main";
import interviews from "./pages/interviews/interviews";
import testPost from "./pages/posts/testPost/testPost";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact component={Main}></Route>
                <Route path="/interviews" component={interviews}></Route>
                <Route path="/posts/testPost" component={testPost}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;