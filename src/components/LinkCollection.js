import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './LinkCollection.css'

const LinkCollection = ({ icon, collection = [] }) => {
  const links = collection.map((link) => (
    <li key={link.url} className="link-item">
      <a href="{link.url}">{link.title}</a>
    </li>
  ))

  return (
    <div className="link-collection">
      <div className="link-container">{icon ? generateIcon(icon) : ''}</div>
      <ul className="link-list">{links}</ul>
    </div>
  )
}

const generateIcon = (icon) => {
  return <FontAwesomeIcon className="link-icon" icon={icon} />
}

export default LinkCollection
