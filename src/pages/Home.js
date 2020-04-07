import React from 'react'
import NewTweet from '../components/NewTweet';
import '../styles/Main.css';
import { TweetList } from '../components/TweetList';

export const Home = () => {
    return (
        <>
            <div className="home">
                <h1>Home</h1>
            </div>
            <NewTweet />
            <div className="tweets">
                <TweetList />
            </div>
        </>
    )
}
