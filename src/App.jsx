import {React, useState} from 'react';
import DisplayPage from './components/DisplayPage';
import WelcomePage from "./components/WelcomePage"
import LiveStreams from './components/LiveStreams';
import Menu from "./components/Menu"
// eslint-disable-next-line
import { WelcomeContext , WelcomeContextProvider} from './components/WelcomeContext';
import './App.css';


function App(props) {
  // const [display, setDisplay] = useState(false)
  // function handleClick() {
  //   setDisplay(prev => !prev)
  // }
  return (
        <WelcomeContextProvider>
            <Menu />
            {/* <DisplayPage />
            <WelcomePage />   */}
        </WelcomeContextProvider>
  )
}

export default App;
