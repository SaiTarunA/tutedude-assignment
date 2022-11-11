import React from 'react'
import '../../index.css'
import './ReferAndEarn.css'

const ReferDetailsOption = (props) => {
  return (
    <div className="ReferDetailsOption">
        <div className="ReferDetailsOption__name font-14">{props.name}</div>
        <div className="ReferDetailsOption__value font-32 font-medium">{props.value}</div>
    </div>
  )
}

export default ReferDetailsOption