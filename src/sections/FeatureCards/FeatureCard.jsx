import React from 'react'
import classes from './FeatureCard.module.css'
const FeatureCards = ({ image, title, icon }) => {
    return (
        <div className={classes.cardBody}>
            <img className={classes.hero} src={image} alt={title} />

            <img src={icon} alt={title} className={classes.icon} />
            
            <h1 className={classes.title} >
                {title}
            </h1>
        </div>
    )
}

export default FeatureCards