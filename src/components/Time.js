import React from 'react'
import { format } from 'date-fns'

import './Time.css'

const Time = () => {
  return <div className="time">{getTime()}</div>
}

const getTime = () => {
  const time = new Date()
  const formatted = format(time, 'kk:mm')
  return formatted
}

export default Time
