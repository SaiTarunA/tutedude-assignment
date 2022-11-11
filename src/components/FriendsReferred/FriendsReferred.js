import React from 'react'
import '../../index.css'
import Section1 from './Section1'
import './FriendsReferred.css'
import { ReactComponent as InvitePeople } from '../../images/go_back.svg'
import { NavLink } from 'react-router-dom'
import Section2 from './Section2'
import Footer from '../Footer/Footer'

const FriendsReferred = (props) => {
  return (
    <div>
        <div className="FriendsReferred workspace workspace2 vertical-separator-padding FriendsReferred__go-back">
            <NavLink to="/">
                <div className="FriendsReferred__go-back-container flex-align-center">
                    <div className="flex-align-center">
                        <InvitePeople />
                    </div>
                    <div className="FriendsReferred__go-back-container__text font-16 font-medium primary">go back</div>
                </div>
            </NavLink>
        </div>
        <div className="FriendsReferred workspace workspace2 vertical-separator">
            <Section1 referalCode={props.referalCode}/>
        </div>
        <div className="FriendsReferred workspace workspace2 vertical-separator vertical-separator-padding">
            <Section2 />
        </div>
        <div className="FriendsReferred workspace workspace2 vertical-separator">
            <Footer title="Terms & Conditions" link="/"/>
        </div>
    </div>
  )
}

export default FriendsReferred