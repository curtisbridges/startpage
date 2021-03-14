import React from 'react'

import './Greeting.css'

const Greeting = () => {
  return <div className="greeting">{getGreeting('Curtis')}</div>
}

const getGreeting = (name) => {
  const hour = new Date().getHours()

  let text = ''

  if (hour <= 4) {
    text = 'Go to sleep'
  } else if (hour <= 12) {
    text = 'Good morning'
  } else if (hour <= 16) {
    text = 'Good afternoon'
  } else if (hour <= 20) {
    text = 'Good evening'
  } else {
    text = 'Go to sleep'
  }

  return `${text}, ${name}`
}

export default Greeting
