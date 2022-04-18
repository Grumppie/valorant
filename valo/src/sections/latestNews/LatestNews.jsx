import React from 'react'
import './latestNews.css'
import line from '../../Assets/title-border-blue.svg'
import news1 from '../../Assets/news1.svg'
import news2 from '../../Assets/news2.svg'
import news3 from '../../Assets/news3.svg'

const data = [
    {
        img: news1,
        heading: "STATE OF THE AGENTS -",
        date: "MARCH 2022",
    },
    {
        img: news2,
        heading: "STATE OF THE AGENTS -",
        date: "MARCH 2022",
    },
    {
        img: news3,
        heading: "STATE OF THE AGENTS -",
        date: "MARCH 2022",
    }
]
function LatestNews() {
    return (
        <div className="latest-news-outer">
            <div>
                <div>
                    <h1 className="latest-news-heading">LATEST NEWS</h1>
                </div>
                <div>
                    <img className="latest-news-line-img" src={line} alt="line"></img>
                </div>
                <div>
                    <h3 className="latest-news-subhead">
                        CREATIVITY IS YOUR GREATEST WEAPON
                    </h3>
                </div>
            </div>
            <div className="latest-news-card-div">
                {data.map((card) => {
                    return (
                        <div className="latest-news-card">
                            <div>
                                <img src={card.img} alt="news"></img>
                            </div>
                            <div>
                                <h4 className="latest-news-card-heading">
                                    {card.heading}
                                </h4>
                                <h4>
                                    {card.date}
                                </h4>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default LatestNews