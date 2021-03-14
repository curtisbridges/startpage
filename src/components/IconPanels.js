import React from 'react'

import IconPanel from './IconPanel'

import './IconPanels.css'

const IconPanels = () => {
  return (
    <div className="Icon-grid">
      <IconPanel
        name=""
        url="https://google.com"
        alt="Google"
        icon={['fab', 'google']}
      />
      <IconPanel
        name=""
        url="https://youtube.com"
        alt="YouTube"
        icon={['fab', 'youtube']}
      />
      <IconPanel
        name=""
        url="https://amazon.com"
        alt="Amazon"
        icon={['fab', 'amazon']}
      />

      <IconPanel
        name=""
        url="https://github.com/curtisbridges"
        alt="Curtis Bridges GitHub"
        icon={['fab', 'github']}
      />
      <IconPanel
        name=""
        url="https://twitter.com/home"
        alt="Twitter"
        icon={['fab', 'twitter']}
      />
      <IconPanel
        name=""
        url="https://getpocket.com/my-list"
        alt="Pocket Reading List"
        icon={['fab', 'get-pocket']}
      />
    </div>
  )
}

export default IconPanels
