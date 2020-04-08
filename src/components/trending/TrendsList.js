import React from 'react';
import { Trend } from '../trending/Trend';
import { SettingsIcon } from '../../images/svg/svgs';

export const TrendsList = () => {
    const trends = [
        {
            name: '#Modiji_Ban_TikTok',
            topic: 'Trending in India',
            tweets: '3,700k'
        },
        {
            name: 'Spitting',
            topic: 'Trending in India',
            tweets: '37k'
        }, {
            name: 'Supreme Court of India',
            topic: 'Trending in India',
            tweets: '3,267'
        },
        {
            name: '#PMKcallsCurfewExtension',
            topic: 'Trending in India',
            tweets: '27k'
        }, {
            name: 'Bernie',
            topic: 'Trending in India',
            tweets: '481k'
        }
    ]
    return (
        <div>
            <div className="trends-for-you flex-space-between">
                <h1 className="m-0">Trends for you</h1>
                <SettingsIcon />
            </div>
            <div className="trends">
                {trends.map(trend => (<Trend trend={trend} />))}
            </div>
        </div>
    )
}
