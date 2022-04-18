import React from 'react'
import classes from './FeatureSection.module.css'
import FeatureCards from './FeatureCard'
import newCharacterImage from '../../Assets/HD-wallpaper-valorant-omen-games-omen-pc-valorant.svg'
import newMapImage from '../../Assets/fg.svg'
import newFocusImage from '../../Assets/newFocusImage.svg'
import controllerIcon from '../../Assets/game.svg'
const FeatureSection = () => {

    const details = [
        {
            image: newCharacterImage,
            title: "New Charactor",
            icon: controllerIcon
        },
        {
            image: newMapImage,
            title: "New Charactor",
            icon: controllerIcon
        },
        {
            image: newFocusImage,
            title: "New Charactor",
            icon: controllerIcon
        },
    ]


    return (
        <>
            <section class={classes.featuresContainer}>
                {details.map((d, index) => (
                    <FeatureCards image={d.image} title={d.title} icon={d.icon} key={index} />
                ))}
            </section>
        </>
    )
}

export default FeatureSection