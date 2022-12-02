import axios from "axios"
import {React, createContext, useState, useEffect } from "react"



const WelcomeContext = createContext()

function WelcomeContextProvider(props) {
  // set the array of US states
  const stateCodes = [
    {name: 'All', abbreviation: ""},
   { name: 'ALABAMA', abbreviation: 'AL'},
   { name: 'ALASKA', abbreviation: 'AK'},
   { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
   { name: 'ARIZONA', abbreviation: 'AZ'},
   { name: 'ARKANSAS', abbreviation: 'AR'},
   { name: 'CALIFORNIA', abbreviation: 'CA'},
   { name: 'COLORADO', abbreviation: 'CO'},
   { name: 'CONNECTICUT', abbreviation: 'CT'},
   { name: 'DELAWARE', abbreviation: 'DE'},
   { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
   { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
   { name: 'FLORIDA', abbreviation: 'FL'},
   { name: 'GEORGIA', abbreviation: 'GA'},
   { name: 'GUAM', abbreviation: 'GU'},
   { name: 'HAWAII', abbreviation: 'HI'},
   { name: 'IDAHO', abbreviation: 'ID'},
   { name: 'ILLINOIS', abbreviation: 'IL'},
   { name: 'INDIANA', abbreviation: 'IN'},
   { name: 'IOWA', abbreviation: 'IA'},
   { name: 'KANSAS', abbreviation: 'KS'},
   { name: 'KENTUCKY', abbreviation: 'KY'},
   { name: 'LOUISIANA', abbreviation: 'LA'},
   { name: 'MAINE', abbreviation: 'ME'},
   { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
   { name: 'MARYLAND', abbreviation: 'MD'},
   { name: 'MASSACHUSETTS', abbreviation: 'MA'},
   { name: 'MICHIGAN', abbreviation: 'MI'},
   { name: 'MINNESOTA', abbreviation: 'MN'},
   { name: 'MISSISSIPPI', abbreviation: 'MS'},
   { name: 'MISSOURI', abbreviation: 'MO'},
   { name: 'MONTANA', abbreviation: 'MT'},
   { name: 'NEBRASKA', abbreviation: 'NE'},
   { name: 'NEVADA', abbreviation: 'NV'},
   { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
   { name: 'NEW JERSEY', abbreviation: 'NJ'},
   { name: 'NEW MEXICO', abbreviation: 'NM'},
   { name: 'NEW YORK', abbreviation: 'NY'},
   { name: 'NORTH CAROLINA', abbreviation: 'NC'},
   { name: 'NORTH DAKOTA', abbreviation: 'ND'},
   { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
   { name: 'OHIO', abbreviation: 'OH'},
   { name: 'OKLAHOMA', abbreviation: 'OK'},
   { name: 'OREGON', abbreviation: 'OR'},
   { name: 'PALAU', abbreviation: 'PW'},
   { name: 'PENNSYLVANIA', abbreviation: 'PA'},
   { name: 'PUERTO RICO', abbreviation: 'PR'},
   { name: 'RHODE ISLAND', abbreviation: 'RI'},
   { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
   { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
   { name: 'TENNESSEE', abbreviation: 'TN'},
   { name: 'TEXAS', abbreviation: 'TX'},
   { name: 'UTAH', abbreviation: 'UT'},
   { name: 'VERMONT', abbreviation: 'VT'},
   { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
   { name: 'VIRGINIA', abbreviation: 'VA'},
   { name: 'WASHINGTON', abbreviation: 'WA'},
   { name: 'WEST VIRGINIA', abbreviation: 'WV'},
   { name: 'WISCONSIN', abbreviation: 'WI'},
   { name: 'WYOMING', abbreviation: 'WY' }
  ]
  const [count, setCount] = useState(0)
  // set empty array as state for the imported data
  const [collection, setCollection] = useState([])
  // set state for user set parameters for the api request 
  const [selections, setSelections] = useState({
    stateCode: "",
    isPreRecorded: true,
    search: ""
  })
  //set empty state for user video selection data
  const [videoSelection, setVideoSelection] = useState()
  const [display, setDisplay] = useState("main")
  
  // set empty state for image carousel 
  const [imageArray, setImageArray] = useState([])
  
  useEffect(() => {
    axios.get(`https://developer.nps.gov/api/v1/${selections.isPreRecorded ? "multimedia/videos" : "webcams"}?${selections.stateCode === "" ? "" : selections.stateCode}${selections.search === "" ? "" : `q=${selections.search}&`}api_key=ch5ZJCcqmTafvaWiR3oUP2lf6vBHo2RfWxPzNoe3`)
      .then(res => {setCollection(res.data.data)})
      .catch(error => console.log(error))
  }, [count])

  function handleSubmit() {
    setCount(count => count + 1)
    // changePage()
    console.log(count)
  }
  function setVideo(id) {
    let video = collection.find(vid => vid.id == id)
    console.log(video)
    setVideoSelection(video)
  }
  let imagesArray =[]
  function getImages() {
    axios.get("https://developer.nps.gov/api/v1/parks?stateCode=ca&limit=10&api_key=ch5ZJCcqmTafvaWiR3oUP2lf6vBHo2RfWxPzNoe3")
            // .then(res => setImageArray(res.data.data[0].images))
            .then(res => setImageArray(res.data.data.map(image => image.images[0])))
            .catch(err => console.log(err))
  }  
  
  useEffect(() => {
        getImages()

      }, [collection])  

  console.log(collection) 
  console.log(selections)
  console.log(imageArray)
  
    return (
      <>
        <WelcomeContext.Provider value={{
          collection: collection,
          stateCodes: stateCodes,
          selections: selections,
          display: display,
          videoSelection: videoSelection,
          setVideo: setVideo,
          handleSubmit: handleSubmit,
          setSelections: setSelections,
          setDisplay: setDisplay,
          imageArray:imageArray,
          setCount:setCount
          // clickStream: clickStream
        }}>
          {props.children}
        </WelcomeContext.Provider>
      </>
  
  )
}

export {WelcomeContext, WelcomeContextProvider}
//   useEffect(() => {
//     axios.get(`https://developer.nps.gov/api/v1/${}?api_key=ch5ZJCcqmTafvaWiR3oUP2lf6vBHo2RfWxPzNoe3`)
//     .then(res => res = res.data.data)
//     // .then(res => res.filter(cam => cam.isStreaming))
//     .then(res => {
//       setcollection(res)  
//     })
//     .catch(error => console.log(error))
//  }, [])