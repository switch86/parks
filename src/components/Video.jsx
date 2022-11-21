import React from "react"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import { useContext } from "react"
import { WelcomeContext } from "./WelcomeContext"
import {useParams} from "react-router-dom"

export default function Video(props) {
    const {videoId} = useParams()
    const {setVideoSelection, collection, videoSelection, selections} = useContext(WelcomeContext)
    const video = collection.find(item => item.id === videoId)

    console.log(video)
    console.log(videoId)
    return (
        <>
            <h1>{video.title}</h1>
            {/* <ReactPlayer url={video.permalinkUrl} /> */}
            {selections.isPreRecorded ?
            <iframe src={`https://www.nps.gov/media/video/embed.htm?id=${videoId}`} width="480" height="306" frameBorder="0" scrolling="auto" allowFullScreen></iframe>
            :
            <>
                <img src={video.images[0].url} width="50%"></img>
            </>
            }   
            <p>{video.description}</p>
        </>
    )

}