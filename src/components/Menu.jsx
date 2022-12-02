import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import DisplayPage from './DisplayPage';
import WelcomePage from "./WelcomePage"
import Video from "./Video"
import { WelcomeContext } from "./WelcomeContext";
import Carousel from "./Carousel";
// import LiveStreams from './LiveStreams';
import { useHorizontalScroll } from "../assets/useSideScroll"

  export default function Menu() {
    const scrollRef = useHorizontalScroll()
    const {imageArray} = React.useContext(WelcomeContext)
    const carouselHtml = imageArray.map((image,index) => {
      return (
          <Carousel 
              {...image}
              key={index} /> 
      )
  })
    return (
    // <Router>
        <header>
          <div className="NavBar">
            <h1>United States National Parks</h1>
            <Link to="/">Home</Link>
            <Link to="/videos">All Videos</Link>
          </div>
              <div className="CarouselContainer" ref={scrollRef}>
                {carouselHtml}
              </div>
            {/* <Link to="/saved">Saved</Link> */}
            {/* <Link to="/livestreams">Live Streams</Link> */} 
        </header>

    )
  }
