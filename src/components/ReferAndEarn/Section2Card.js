import React from 'react'
import '../../index.css'
import './ReferAndEarn.css'

const Section2Card = (props) => {
    
  return (
    <div className="Section2Card flex-align-center">
        <div className="Section2Card__logo flex-align-center">
            {props.logo}
        </div>
        <div className="Section2Card__content font-16">
            <div className="Section2Card__content__title font-medium">
                {props.title}
            </div>
            <div className="Section2Card__content__subtitle">
                {props.subtitle}
            </div>
        </div>
    </div>
  )
}

export default Section2Card