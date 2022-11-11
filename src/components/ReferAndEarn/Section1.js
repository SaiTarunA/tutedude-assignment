import React from 'react'
import '../../index.css'
import './ReferAndEarn.css'
import ReferDetailsOption from './ReferDetailsOption'

const Section1 = (props) => {
  const { referalCode } = props

  return (
    <div className="ReferAndEarn__section-1 flex-align-center">
        <div className="ReferAndEarn__section-1__refer-details flex-align-center">
            <ReferDetailsOption name="Referral Earning" value="₹ 2,500"/>
            <ReferDetailsOption name="Total Referrals" value="7"/>
            <ReferDetailsOption name="Wallet Balance" value="₹ 500"/>
            <div className="ReferAndEarn__section-1__refer-details__button-container">
                <button className="button font-16 font-medium">
                    Withdraw Balance
                </button>
            </div>
        </div>
        <div className="ReferAndEarn__section-1__refer-code">
            <div className="ReferAndEarn__section-1__refer-code__title font-24 font-semibold">
                Your Referral Code
            </div>
            <div className="ReferAndEarn__section-1__refer-code__code-input font-20 font-medium">
                {referalCode.split("").map((value) => (
                        <div key={value}>
                            {value}
                        </div>
                    )
                )}
            </div>
        </div>
    </div>
  )
}

export default Section1