import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer.js';

const initialState = {
    tweets: [
        {
            id: 1,
            user: {
                name: 'The White House',
                image: 'https://pbs.twimg.com/profile_images/1059888693945630720/yex0Gcbi_bigger.jpg',
                handle: '@WhiteHouse',
            },
            tweet: {
                content: 'On World Health Day, 2020, "we reaffirm our commitment to do our part to stop the spread of this virus, care for the sick, and protect the health and well-being of our fellow Americans."',
                image: 'https://pbs.twimg.com/card_img/1246823270524973058/IbkZhS3u?format=jpg&name=small',
                time: '10m',
                comments: '100',
                retweets: '320',
                likes: '1k'
            }
        },
        {
            id: 2,
            user: {
                name: 'Barack Obama',
                image: 'https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_bigger.jpg',
                handle: '@BarackObama',
            },
            tweet: {
                content: `My advisor and friend @cecmunoz has been someone I’ve turned to for years. In her new book, More Than Ready, she shares her story and an empowering message to women, especially women of color, that they are the leaders we need to make a change in our world.`,
                image: 'https://pbs.twimg.com/media/EVBZFzbXkAA95FX?format=jpg&name=small',
                time: '2h',
                comments: '2k',
                retweets: '5k',
                likes: '10k'
            }
        },
        {
            id: 3,
            user: {
                name: 'CNN',
                image: 'https://pbs.twimg.com/profile_images/508960761826131968/LnvhR8ED_bigger.png',
                handle: '@CNN',
            },
            tweet: {
                content: 'A massive plan by the federal government to buy 600 million N95 face masks may not even help fight the coronavirus pandemic at its peak because the federal government had such a low supply of masks heading into the crisis.',
                image: 'https://pbs.twimg.com/card_img/1247587714628603904/gzqe3c-i?format=jpg&name=small',
                time: '1h',
                comments: '1.3k',
                retweets: '3.4k',
                likes: '10k'
            }
        }
    ]

}

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
    const [state, dipatch] = useReducer(AppReducer, initialState);

    function getTweet(id) {

        return state.tweets.find(tweet => tweet.id == id);
    }
    function addTweet(tweets) {
        dipatch({
            type: 'ADD_TWEET',
            payload: tweets
        })
    }

    return (<GlobalContext.Provider value={{ tweets: state.tweets, addTweet, getTweet }}>
        {children}
    </GlobalContext.Provider>)
}
