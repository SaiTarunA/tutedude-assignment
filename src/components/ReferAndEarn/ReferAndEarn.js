import React from 'react'
import '../../index.css'
import './ReferAndEarn.css'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const ReferAndEarn = (props) => {

  return (
    <div>
        <div className="ReferAndEarn workspace vertical-separator">
            <Section1 referalCode={props.referalCode}/>
        </div>
        <div className="ReferAndEarn workspace vertical-separator">
            <Section2 />
        </div>
        <div className="ReferAndEarn workspace vertical-separator">
            <Section3 />
        </div>
    </div>
  )
}

export default ReferAndEarn