import { useState } from 'react'
import { AnimatePresence } from "framer-motion"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import CalendarApp from "./components/windows/CalendarApp"
import './app.scss'


const App = () => {

  

  const [windowState, setWindowState] = useState({
    github:false,
    note:false,
    resume:false,
    calendar:false,
    spotify:false,
    cli:false

  })

  return (
   <main>
    <Nav/>
    <Dock windowState={windowState} setWindowState={setWindowState}/>

    {/* ✅ WRAP ALL WINDOWS INSIDE AnimatePresence */}
    <AnimatePresence>

      {windowState.github && (
        <Github 
          key="github"
          windowName="github" 
          onClose={() => setWindowState(state => ({...state, github: false}))}
        />
      )}

      {windowState.note && (
        <Note 
          key="note"
          windowName="note" 
          onClose={() => setWindowState(state => ({...state, note: false}))}
        />
      )}

      {windowState.resume && (
        <Resume 
          key="resume"
          windowName="resume" 
          onClose={() => setWindowState(state => ({...state, resume: false}))}
        />
      )}

      {windowState.calendar && (
        <CalendarApp
          key="calendar"
          windowName="calendar"
          onClose={()=>setWindowState(state=>({...state, calendar:false}))}
        />
      )}

      {windowState.spotify && (
        <Spotify 
          key="spotify"
          windowName="spotify" 
          onClose={() => setWindowState(state => ({...state, spotify: false}))}
        />
      )}

      {windowState.cli && (
        <Cli 
          key="cli"
          windowName="cli" 
          onClose={() => setWindowState(state => ({...state, cli: false}))}
        />
      )}

    </AnimatePresence>

   </main>
  )
}

export default App