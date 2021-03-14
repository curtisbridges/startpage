import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'

import './Time.css'

const Time = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const refresh = () => {
      setTimeout(() => {
        setTime(new Date())
        refresh()
      }, 60 * 1000)
    }

    refresh()
  }, [])

  return <div className="time">{format(time, 'kk:mm')}</div>
}

export default Time
