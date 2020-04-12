import React from 'react';
import { Logo, HomeIcon, ExploreIcon, NotificationIcon, MessageIcon, BookmarkIcon, ListsIcon, MoreIcon } from '../images/svg/svgs';
import { SmallAvatar } from '../images/avatars';

export const Sidebar = () => {
    const profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';
    return (
        <div>
            <div className="side-nav-header">
                <Logo />
            </div>
            <div className="side-nav-items">

                <ul className="p-0">
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <HomeIcon />
                            <span className="side-nav-text">Home</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <ExploreIcon />
                            <span className="side-nav-text">Explore</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <NotificationIcon />
                            <span className="side-nav-text">Notification</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <MessageIcon />
                            <span className="side-nav-text">Messages</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <BookmarkIcon />
                            <span className="side-nav-text">Bookmarks</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <ListsIcon />
                            <span className="side-nav-text">List</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">

                            <SmallAvatar width="22" image={profImageurl} />
                            <span className="side-nav-text">Profile</span>
                        </div>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <div className="side-nav-item-holder">
                            <MoreIcon />
                            <span className="side-nav-text">More</span>
                        </div>
                    </li>

                </ul>
                <div className="btn tweet-btn text-center">Tweet</div>
            </div>

        </div>
    )
}
