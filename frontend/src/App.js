import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main/Main";
import interviews from "./pages/interviews/interviews";
import testPost from "./pages/posts/testPost/testPost";

function App() {

  const history = createBrowserHistory()
  React.useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID, { debug: true })
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }) // Update the user's current page
      ReactGA.pageview(location.pathname) // Record a pageview for the given page
    })
  }, [])

    return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className="App">
                    <Route path="/" exact component={Main}></Route>
                    <Route path="/interviews" component={interviews}></Route>
                    <Route path="/posts/testPost" component={testPost}></Route>
                </div>
            </BrowserRouter>
          </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;