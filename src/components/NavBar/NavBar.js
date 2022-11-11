import React from 'react'
import {ReactComponent as Logo} from '../../images/logo.svg'
import {ReactComponent as UserProfile} from '../../images/user_profile.svg'
import {ReactComponent as DownArrow} from '../../images/down_arrow.svg'
import '../../index.css'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="NavBar__container">
        <div className="NavBar flex-align-center">
            <div className="NavBar__logo">
                <NavLink to="/"><Logo /></NavLink>
            </div>
            <div className="NavBar__options font-18 font-medium flex-align-center primary">
                <NavLink to="/" className="NavBar__option NavBar__option-disabled opacity-25">
                    My Assignment
                </NavLink>
                <NavLink to="/" className="NavBar__option NavBar__option-disabled opacity-25">
                    Chat with Mentor
                </NavLink>
                <NavLink to="/" className="NavBar__option">
                    <div className="NavBar__option__profile flex-align-center">
                        <div className="NavBar__option__icon flex-align-center">
                          <UserProfile />
                        </div>
                        <span>Profile Name</span>
                        <div className="NavBar__option__down-arrow flex-align-center">
                            <DownArrow />
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    </header>
  )
}

export default NavBar