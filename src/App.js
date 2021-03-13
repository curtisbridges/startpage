import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

import DateComponent from './components/DateComponent'
import Greeting from './components/Greeting'
import LinkCollections from './components/LinkCollections'
import IconPanels from './components/IconPanels'
import Time from './components/Time'
import Weather from './components/Weather'

import './App.css'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(fas)

function App() {
  return (
    <div className="App">
      <div className="App-grid">
        <div className="">
          <Time />
          <Greeting />
        </div>
        <div className="">
          <DateComponent />
          <Weather />
        </div>
        <IconPanels />
        <LinkCollections />
      </div>
    </div>
  )
}

export default App
