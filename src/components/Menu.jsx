import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import DisplayPage from './DisplayPage';
import WelcomePage from "./WelcomePage"
import Video from "./Video"
// import LiveStreams from './LiveStreams';


  export default function Menu() {
    return (
    <Router>
        <header>
            <h1>United States National Parks</h1>
            <Link to="/">Home</Link>
            {/* <Link to="/saved">Saved</Link> */}
            <Link to="/videos">Videos</Link>
            {/* <Link to="/livestreams">Live Streams</Link> */}
        </header>
        <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/videos" element={<DisplayPage />}></Route>
            <Route path="/videos/:videoId" element={<Video />}></Route>
            {/* <Route path="/lisvestreams" element={<LiveStreams />}></Route> */}
        </Routes>
    </Router>
    )
  }
