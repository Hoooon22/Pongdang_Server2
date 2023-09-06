import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserView, MobileView } from 'react-device-detect'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" component={Main} />
                <Route path="/test" component={Test}/>
            </div>
        </BrowserRouter>
    );
}

export default App;