import React, { useState, useContext } from 'react'
import { SmallAvatar } from '../images/avatars'
import { AddImageIcon, AddGifIcon, AddPollIcon, AddEmojiIcon } from '../images/svg/svgs'
import { GlobalContext } from '../context/GlobalState';

export const NewTweet = () => {
    const profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';

    const [content, setContent] = useState('');
    const { addTweet } = useContext(GlobalContext);
    const handleNewTweet = () => addTweet(content);

    return (
        <div className="new-tweet">
            <div className="left">
                <SmallAvatar width="48" image={profImageurl} />
            </div>
            <div className="right">
                <div className="flex-align-center">

                    <span className="w-100">
                        <input className="w-100" placeholder="What's happening?" type="text" onChange={(event) => setContent(event.target.value)} /></span>
                </div>
                <div className="new-tweet-options">
                    <div className="add-icons">
                        <AddImageIcon />
                        <AddGifIcon />
                        <AddPollIcon />
                        <AddEmojiIcon />
                    </div>
                    <div className="tweet" onClick={handleNewTweet}>
                        <div className="btn tweet-btn text-center">Tweet</div>
                    </div>
                </div>
            </div>

        </div>
    )

}
