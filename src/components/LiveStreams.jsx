import {React, useContext} from "react"
// import ReactPlayer from "react-player"
import {WelcomeContext} from "./WelcomeContext"


export default function LiveStreams(props) {
        // const {
        //     streamsCollection, 
        //     imageArray}= useContext(WelcomeContext)
        
        // // const newImageArray = imageArray.filter(image => console.log(image))
        // const streamsHTML = imageArray.map((image, index) => {
        //     if (image.length > 0) {
        //         console.log(image)
        //         return (
        //             <div key={index} className="hasImage">
        //             <h3>{image[0].title}</h3>
        //             <img src={image[0].url}  alt={image[0].altText}></img>
        //             </div>
        //             )
                
        // }})
        return (
            <>
                <h1>Choose a LiveStream</h1>
                {/* {streamsHTML}  */}
            </>
        )
}


