import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import './PathDescription.css'

const BreadCrumbOption = (props) => {
  return (
    <div className="BreadCrumbOption">
        <NavLink to={props.link}>
            {props.name}
        </NavLink>
        <span className="BreadCrumbOption__right-arrow">
            &gt;
        </span>
    </div>
  )
}

export default BreadCrumbOption