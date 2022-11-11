import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import './Footer.css'

const Footer = (props) => {
  return (
    <div className="Footer vertical-separator-padding font-16 font-medium primary">
        <NavLink to={props.link}>
            <span className="ReferAndEarn__section-3__option">
                {props.title}
            </span>
        </NavLink>
    </div>
  )
}

export default Footer