import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../index.css'
import BreadCrumbOption from './BreadCrumbOption'
import './PathDescription.css'

const PathDescription = () => {
  const location = useLocation()

  return (
    <header className="PathDescription__container">
        <nav className="PathDescription flex-align-center font-14">
            <BreadCrumbOption name="UI/UX" link="/"/>
            <BreadCrumbOption name="Refer&Earn" link="/"/>
            {location.pathname === "/FriendsReferred" &&
                <BreadCrumbOption name="Friends Referred" link="/FriendsReferred"/>
            }
        </nav>
    </header>
  )
}

export default PathDescription