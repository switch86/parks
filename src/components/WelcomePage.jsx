import { useContext } from "react"
import { WelcomeContext, WelcomeContextProvider } from "./WelcomeContext"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Carousel from "./Carousel"

export default function WelcomePage(props) {
    const {
        stateCodes, 
        setSelections, 
        selections, 
        handleSubmit, 
        count, 
        setCount} = useContext(WelcomeContext)
    
    const stateCodeHtml = stateCodes.map((state, index) => {
        return (
                <option key={index} value={`statecode=${state.abbreviation}&`}>{state.abbreviation} - {state.name}</option>
                )
            })


    function handleChange(event) {
        const {name, value} = event.target
        setSelections(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function handleClick() {
        handleSubmit()
        setCount(ct => ct++)
        console.log(count)
    }
    return (
        <div className="welcome">
            <div>
                <h1>Welcome!</h1>
                <h2>Please select from the options below</h2>
            </div>
            <form className="selectionForm">
                <label htmlFor="search">State Selection: </label>
                <select value={selections.stateCode} name="stateCode" onChange={handleChange}>
                    {stateCodeHtml}
                </select>
                <label htmlFor="isPreRecorded">Video or Livestream: </label>
                <select name="isPreRecorded" onChange={handleChange}>
                    <option value="true">Pre-Recorded Videos</option>
                    <option value="false">LiveStreamed Videos</option>
                </select>
                <label htmlFor="search">Search Topic: </label>
                <input placeholder="Search Topic" value={selections.search === "" ? "": selections.search} type="text" name="search" id="search"onChange={handleChange}></input>
            </form>
                <Link to="/videos">
                    <button onClick={handleClick} className="searchButton">Search</button>
                    </Link>
        </div>
    )
}