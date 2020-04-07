import React from 'react';
import { Logo, HomeIcon, ExploreIcon, NotificationIcon, MessageIcon, BookmarkIcon, ListsIcon, MoreIcon } from '../images/svg/svgs';
import { SmallAvatar } from '../images/avatars';

export const Sidebar = () => {
    return (
        <div>
            <div className="side-nav-header">
                <Logo />
            </div>
            <div className="side-nav-items">

                <ul className="p-0">
                    <li className="side-nav-item flex-align-center">
                        <HomeIcon />
                        <span className="side-nav-text">Home</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <ExploreIcon />
                        <span className="side-nav-text">Explore</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <NotificationIcon />
                        <span className="side-nav-text">Notification</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <MessageIcon />
                        <span className="side-nav-text">Messages</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <BookmarkIcon />
                        <span className="side-nav-text">Bookmarks</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <ListsIcon />
                        <span className="side-nav-text">List</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <SmallAvatar width="22" />
                        <span className="side-nav-text">Profile</span>
                    </li>
                    <li className="side-nav-item flex-align-center">
                        <MoreIcon />
                        <span className="side-nav-text">More</span>
                    </li>

                </ul>
                <div className="btn tweet-btn text-center">Tweet</div>
            </div>

        </div>
    )
}
