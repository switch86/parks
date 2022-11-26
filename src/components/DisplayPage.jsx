import {React, useContext} from "react"
// import ReactPlayer from "react-player"
import {WelcomeContext} from "./WelcomeContext"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Video from "./Video"

function DisplayPage(props) {
    const {
        collection,
        selections,
        setVideo}= useContext(WelcomeContext)
    
    function handleVideoSelection(event) {
        console.log(event.target.id)
        setVideo(event)
    }
    let streamsHTML
    if (selections.isPreRecorded) { 
        streamsHTML = collection.map((item, index) => {
            if(item.splashImage.url) {
                return (
                    <div key={item.id}  className="Image">
                        <Link to={`/videos/${item.id}`} >
                            <h3 id={item.id} onClick={handleVideoSelection}>{item.title}</h3>
                        </Link>
                            <img src={item.splashImage.url}  alt={item.description}></img>
                    </div>
                    )
            }
            })
    } else {
        streamsHTML = collection.map((item,index) => {
            let image = item.images[0]
            // console.log(image)
            if (image) {
                return (
                    <div key={index} className="Image">
                        <Link to={`/videos/${item.id}`} element={<Video />}>
                            <h3>{item.title}</h3>
                            <img src={image.url}  alt={image.altText}></img>
                        </Link>
                    </div>
                    )
            }
        })
    }

        return (
            <>
                {selections.isPreRecorded ? 
                <h1>Choose a Video</h1>
                :
                <h1>Choose a LiveStream</h1>}
                {streamsHTML} 
            </>
        )

}
export default DisplayPage