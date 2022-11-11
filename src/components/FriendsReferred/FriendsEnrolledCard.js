import React from 'react'

const FriendsEnrolledCard = (props) => {
  return (
    <div className="FriendsEnrolledCard">
        <div className="FriendsEnrolledCard__title flex-align-center">
            <div className="FriendsEnrolledCard__title__name font-16 font-bold">
                {props.name}
            </div>
            <div className="FriendsEnrolledCard__title__date font-14">
                {props.date}
            </div>
        </div>
        <div className="FriendsEnrolledCard__subtitle font-14 font-medium">
            Courses Enrolled({props.courseEnrolledNumber})
        </div>
        <div className="FriendsEnrolledCard__course-list-container">
            <div className="FriendsEnrolledCard__course-list flex-align-center font-14">
                {props.courseList.map((value) => (
                    <div key={value} className="chip">
                        {value}
                    </div>
                ))}
            </div>
        </div>
        <div className="FriendsEnrolledCard__footer flex-align-center">
            <div className="FriendsEnrolledCard__footer__name font-16">
                Referral Amount
            </div>
            <div className="FriendsEnrolledCard__footer__value font-24 font-semibold">
                {props.referralAmount}
            </div>
        </div>
    </div>
  )
}

export default FriendsEnrolledCard