import React from 'react'
import { format } from 'date-fns'

import './Date.css'

const DateComponent = () => {
  return <div className="date">{getDate()}</div>
}

const getDate = () => {
  const date = new Date()
  const formatted = format(date, 'LLL Mo')
  return formatted
}

export default DateComponent
