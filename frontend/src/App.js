import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main/Main";
import interviews from "./pages/interviews/interviews";
import testPost from "./pages/posts/testPost/testPost";
import Wrapper from "./components/Wrapper";

ReactGA.initialize('G-EE5Q5M4E8X');

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
              <AnimatePresence>
                <Switch>
                    <Route path="/" exact component={Wrapper(Main)}></Route>
                    <Route path="/interviews" component={Wrapper(interviews)}></Route>
                    <Route path="/posts/testPost" component={Wrapper(testPost)}></Route>
                </Switch>
              </AnimatePresence>
            </div>
        </BrowserRouter>
    );
}

export default App;