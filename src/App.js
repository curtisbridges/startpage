import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'

import DateComponent from './components/DateComponent'
import Greeting from './components/Greeting'
import LinkCollection from './components/LinkCollection'
import LinkPanel from './components/LinkPanel'
// import Search from './components/Search'
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
      <div className="App-splitter">
        <div>
          <div className="fixed">
            {/* <Search /> */}
            <Time />
            <Greeting />
          </div>
          <div className="App-grid">
            <LinkPanel
              name=""
              url="https://google.com"
              alt="Google"
              icon={['fab', 'google']}
            />
            <LinkPanel
              name=""
              url="https://twitter.com/home"
              alt="Twitter"
              icon={['fab', 'twitter']}
            />
            <LinkPanel
              name=""
              url="https://github.com/curtisbridges"
              alt="Curtis Bridges GitHub"
              icon={['fab', 'github']}
            />

            <LinkPanel
              name=""
              url="https://amazon.com"
              alt="Amazon"
              icon={['fab', 'amazon']}
            />
            <LinkPanel
              name=""
              url="https://youtube.com"
              alt="YouTube"
              icon={['fab', 'youtube']}
            />
            <LinkPanel
              name=""
              url="https://www.wikipedia.org/"
              alt="Wikipedia"
              icon={['fab', 'wikipedia-w']}
            />
          </div>
        </div>
        <div className="App-collection">
          <div className="fixed">
            <DateComponent />
            <Weather />
          </div>
          <div className="App-grid">
            <LinkCollection
              title="Reddit"
              collection={[
                { title: 'Home', url: 'https://www.reddit.com/' },
                {
                  title: 'Favorites',
                  url: 'https://www.reddit.com/user/curtisbridges/m/favorites/',
                },
                {
                  title: 'Popular',
                  url: 'https://www.reddit.com/r/popular/',
                },
              ]}
              icon={['fab', 'reddit']}
            />
            <LinkCollection
              title="Spotify"
              collection={[
                {
                  title: 'Everyday',
                  url:
                    'https://open.spotify.com/playlist/6qQrcOJvxzG1J8T1QLCqz6?si=YI8PaaXTTQ6t0TOeC6UCpQ',
                },
                {
                  title: 'Mellow',
                  url:
                    'https://open.spotify.com/playlist/0JnC951eo7uaCmsA8Ci39C?si=1yzBkmNJQxqdx0nZk9QY_g',
                },
                {
                  title: 'Harder',
                  url:
                    'https://open.spotify.com/playlist/5fkuZsPtq6z9kWsSur1pb0?si=qHGDQ5kHRhywN_edi9-t_g',
                },
              ]}
              icon={['fab', 'spotify']}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
