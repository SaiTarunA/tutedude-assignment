import React from 'react'
import FriendsEnrolledCard from './FriendsEnrolledCard'

const Section2 = () => {
  const courses1 = ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"]
  const courses2 = ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java", "C++", "C", "C#", "Data Structures", "ML", "MEAN", "Django"]
  const courses3 = ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java", "C++", "C", "C#", "Data Structures", "ML", "MEAN", "Django"]

  return (
    <div className="FriendsReferred__section-2">
        <div className="FriendsReferred__section-2__heading font-20">
            <span className="font-semibold primary">Friends who enrolled</span><span>(3)</span>
        </div>
        <div className="FriendsReferred__section-2__body flex-align-center">
            <FriendsEnrolledCard name="Dhiraj Saxsena" date="14 Sep, 2022" courseEnrolledNumber="6" referralAmount="₹185" courseList={courses1}/>
            <FriendsEnrolledCard name="Subhash Mishra" date="15 Sep, 2022" courseEnrolledNumber="23" referralAmount="₹485" courseList={courses2}/>
            <FriendsEnrolledCard name="Prafull Kumar" date="16 Sep, 2022" courseEnrolledNumber="23" referralAmount="₹485" courseList={courses3}/>
        </div>
    </div>
  )
}

export default Section2