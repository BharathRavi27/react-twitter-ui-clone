import React from 'react'

export const Trend = ({ trend }) => {
    return (
        <div className="trends-card">
            <p className="trends-topic m-0">{trend.topic}</p>
            <h2 className="m-0">{trend.name}</h2>
            <p className="trend-tweet-count m-0">{trend.tweets} Tweets</p>
        </div>
    )
}
