import React, { useContext } from 'react'
import TweetCard from './TweetCard'
import { GlobalContext } from '../context/GlobalState'

export const TweetList = () => {
    const { tweets } = useContext(GlobalContext);

    return (
        <>
            {tweets.map((tweet, index) => (<TweetCard key={index} tweet={tweet} />))}
        </>
    )
}
