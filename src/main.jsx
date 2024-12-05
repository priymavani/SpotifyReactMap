import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import './components/Main/Main.css'
import './components/Slidebar/Slidebar.css'
import './components/Playcontrol/Playcontrol.css'

import Main from './components/Main/Main.jsx'
import Slidebar from './components/Slidebar/Slidebar.jsx'
import Playcontrol from './components/Playcontrol/Playcontrol.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="full">
    <Slidebar />
    <Main />
    </div>
    <Playcontrol />
  </StrictMode>,
)
