import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './LinkPanel.css'

const LinkPanel = ({ name, url, alt, icon }) => {
  return (
    <div className="link-panel">
      <a href={url} alt={alt}>
        {icon ? generateIcon(icon) : ''}
        {name}
      </a>
    </div>
  )
}

const generateIcon = (icon) => {
  return <FontAwesomeIcon className="link-icon" icon={icon} />
}

export default LinkPanel
