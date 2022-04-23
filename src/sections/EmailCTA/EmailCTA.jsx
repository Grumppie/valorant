import React, { useState } from 'react'
import classes from './EmailCTA.module.css'
import yellowbg from '../../Assets/yellowLineBG.svg'
import blueLine from '../../Assets/title-border-blue.svg'

const EmailCTA = () => {

    const [email, setEmail] = useState("")

    return (
        <div className={classes.bgContainer} >
            <img src={yellowbg} className={classes.CtaSection} alt='cta-background-img' />
            <p className={classes.title} >
                Best battle royale games on PC
            </p>
            <img src={blueLine} className={classes.blueLine} alt='blue-underline' />
            <p className={classes.info} >
                Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
            </p>
            <div className={classes.emailContainer}>
                <input className={classes.email} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='You Email Address' />
                <button className={classes.button}>Subscribe Now</button>
            </div>
        </div>
    )
}

export default EmailCTA