import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import VideoEmbed from "../assets/VideoEmbed"
import { useContext } from "react"
import { WelcomeContext } from "./WelcomeContext"
import {useParams} from "react-router-dom"
import "./styles/Video.css"

export default function Video(props) {
    const {videoId} = useParams()
    const {setVideoSelection, collection, videoSelection, selections} = useContext(WelcomeContext)
    const video = collection.find(item => item.id === videoId)

    console.log(video)
    console.log(videoId)
    return (
        <div className="videoPage">
            <h1>{video.title}</h1>
            {selections.isPreRecorded ?
            // <VideoEmbed embedId={videoId}/>
            <>
            {/* <ReactPlayer url={`https://www.nps.gov/media/video/embed.htm?id=${videoId}`} /> */}
            {/*  */}
            <iframe className="videoWindow" src={`https://www.nps.gov/media/video/embed.htm?id=AE81211C-B8C2-4EA2-A8CE-0A5AFA531C2C`}></iframe>
             {/* width="480" height="306" frameBorder="0" scrolling="auto" allowFullScreen */}
            </>
            // <video crossOrigin="anonymous">
            //     <source src={`https://www.nps.gov/media/video/embed.htm?id=`}/>
            // </video> 
            :
            <>
            <a href="">
                
                <img className="videoWindow" src={video.images[0].url} width="50%"></img>
            </a>
            </>
            }
            <div className="text">
                <span>Video Description: </span>
                <p>{video.description}</p>
            </div>   
        </div>
    )

}