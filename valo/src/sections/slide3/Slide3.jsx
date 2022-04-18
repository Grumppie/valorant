import React from 'react'
import './slide3.css'
import fire from '../../Assets/Fire Group 1.svg'
import logo from '../../Assets/logo red.svg'

const data = [
    {
        img: logo,
        heading: "WE ARE VALORANT",
        date: "Blend your style and experience on a global, competitive stage.",
    },
    {
        img: logo,
        heading: "WE ARE VALORANT",
        date: "Blend your style and experience on a global, competitive stage.",
    },
    {
        img: logo,
        heading: "WE ARE VALORANT",
        date: "Blend your style and experience on a global, competitive stage.",
    },
    {
        img: logo,
        heading: "WE ARE VALORANT",
        date: "Blend your style and experience on a global, competitive stage.",
    },
]

function Slide3() {
    return (
        <div className="slide3-outer">
            <div>
                <div className="slide3-first-head">
                    <div>
                        <img src={fire} alt="fire"></img>
                    </div>
                    <div>
                        <h2 className="slide3-head1">FUTURE OF GAMING</h2>
                    </div>
                </div>
                <div className="slide3-second-head">
                    <h1 className="slide3-main-heading">
                        WE ARE VALORANT
                    </h1>
                </div>
                <div className="slide3-third-head">
                    <h4 className="slide3-subheading">Blend your style and experience on a global, competitive stage.</h4>
                </div>
            </div>

            <div className="slide3-card-div">
                {data.map((card) => {
                    return (
                        <div className="slide3-card">
                            <div className="slide3-card-first-div">
                                <div>
                                    <img src={logo} alt="logo"></img>
                                </div>
                                <div>
                                    <h2 className="slide3-card-heading">YOUR AGENTS</h2>
                                </div>
                            </div>
                            <div>
                                <h3  className="slide3-card-sub-heading">Blend your style and experience on a global, competitive stage.</h3>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Slide3