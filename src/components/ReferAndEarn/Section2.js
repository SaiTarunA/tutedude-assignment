import React from 'react'
import '../../index.css'
import './ReferAndEarn.css'
import Section2Card from './Section2Card'
import { ReactComponent as InvitePeople } from '../../images/invite_people.svg'
import { ReactComponent as ReferralCoupon } from '../../images/referral_coupon.svg'
import { ReactComponent as Rupee } from '../../images/rupee.svg'
import { ReactComponent as DiscontForFriend } from '../../images/discount_for_friend.svg'
import { ReactComponent as Wallet } from '../../images/wallet.svg'

const Section2 = () => {
  return (
    <div className="ReferAndEarn__section-2">
        <div className="ReferAndEarn__section-2__heading font-24 font-semibold vertical-separator-padding">
            How does it work?
        </div>
        <div className="ReferAndEarn__section-2__body vertical-separator-padding">
            <Section2Card title="Invite your Friends" subtitle="Share the link tutedude.com with your friends" logo={<InvitePeople />}/>
            <Section2Card title="Friend purchases any course" subtitle="Using your REFERRAL CODE in the payments page" logo={<ReferralCoupon />}/>
            <Section2Card title="You get ₹ 200 as referral money" subtitle="On total purchase the friend makes, into your wallet" logo={<Rupee />}/>
            <Section2Card title="Your Friend gets ₹ 200 Off " subtitle="On his overall fee on successful purchase using your referral code " logo={<DiscontForFriend />}/>
            <Section2Card title="Transfer money from wallet" subtitle="When the wallet balance reaches ₹200 or more, you can withdraw it" logo={<Wallet />}/>
        </div>
    </div>
  )
}

export default Section2