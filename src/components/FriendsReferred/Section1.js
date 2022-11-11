import React from 'react'

const Section1 = (props) => {
  const { referalCode } = props

  return (
    <div className="FriendsReferred__section-1 flex-align-center">
        <div className="FriendsReferred__section-1__referral-code">
            <div className="FriendsReferred__section-1__referral-code__heading font-16 primary">
                Your Referral Code
            </div>
            <div className="FriendsReferred__section-1__referral-code__body font-16 font-medium">
                {referalCode.split("").map((value) => (
                        <div key={value}>
                            {value}
                        </div>
                    )
                )}
            </div>
        </div>
        <div className="FriendsReferred__section-1__wallet">
            <div className="FriendsReferred__section-1__wallet__heading font-14 primary">
                Wallet Balance
            </div>
            <div className="FriendsReferred__section-1__wallet__body font-16 font-medium">
                ₹ 500
            </div>
        </div>
    </div>
  )
}

export default Section1