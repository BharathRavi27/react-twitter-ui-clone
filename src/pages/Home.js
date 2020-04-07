import React from 'react'
import NewTweet from '../components/NewTweet';
import '../Main.css';

export const Home = () => {
    return (
        <>
            <div className="home">
                <h1>Home</h1>
            </div>
            <NewTweet />
        </>
    )
}
