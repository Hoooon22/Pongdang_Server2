import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch, Link, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from 'react-transition-group';
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main/Main";
import interviews from "./pages/interviews/interviews";
import testPost from "./pages/posts/testPost/testPost";

ReactGA.initialize('G-EE5Q5M4E8X');

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <TransitionGroup>
                    <Transition
                        key={location.key}
                        timeout={150}
                    >
                        {(status) => (
                            <div className={`page ${status}`}>
                                <Switch location={location}>
                                    <Route path="/" exact component={Main}></Route>
                                    <Route path="/interviews" component={interviews}></Route>
                                    <Route path="/posts/testPost" component={testPost}></Route>
                                </Switch>
                            </div>
                        )}
                    </Transition>
                </TransitionGroup>
            </div>
        </BrowserRouter>
    );
}

export default App;