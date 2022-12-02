import {React, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { WelcomeContext , WelcomeContextProvider} from './components/WelcomeContext';
import Menu from "./components/Menu"
import DisplayPage from './components/DisplayPage';
import WelcomePage from "./components/WelcomePage"
import Video from "./components/Video"
import './App.css';

function App(props) {

  return (
    <Router>
        <WelcomeContextProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/videos" element={<DisplayPage />}></Route>
            <Route path="/videos/:videoId" element={<Video />}></Route>
            {/* <Route path="/lisvestreams" element={<LiveStreams />}></Route> */}
          </Routes>
        </WelcomeContextProvider>
    </Router>
        
  )
}

export default App;
