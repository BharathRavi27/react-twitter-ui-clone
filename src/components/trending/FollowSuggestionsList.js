import React from 'react'
import { FollowSuggestionCard } from './FollowSuggestionCard';
import '../../styles/FollowList.css';

export const FollowSuggestionsList = () => {
    const whoToFollowList = [
        {
            name: 'Huawei',
            handle: '@Huawei',
            image: 'https://pbs.twimg.com/profile_images/1246467440977932292/Wmlicr4o_bigger.jpg'
        },
        {
            name: 'Pinarayi Vijayan',
            handle: '@vijayanpinarayi',
            image: 'https://pbs.twimg.com/profile_images/1179639807506407424/l9apSa2h_bigger.jpg'
        },
        {
            name: 'Economic Times',
            handle: '@EconomicTimes',
            image: 'https://pbs.twimg.com/profile_images/1077844189893853184/PCBPSQVB_bigger.jpg'
        }, {
            name: 'Netflix India',
            handle: '@NetflixIndia',
            image: 'https://pbs.twimg.com/profile_images/1072124554808422401/s8K84jEW_bigger.jpg'
        }
    ]
    return (

        <>
            <div className="flex-space-between">
                <h1 className="m-0">Who To Follow</h1>

            </div>
            <div className="follow-cards">
                {whoToFollowList.map(whoToFollow => (<FollowSuggestionCard whoToFollow={whoToFollow} />))}

            </div>
        </>

    )
}
