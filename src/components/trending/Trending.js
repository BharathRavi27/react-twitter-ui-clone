import React from 'react';
import '../../styles/Trending.css';
import { SearchIcon } from '../../images/svg/svgs'
import { TrendsList } from './TrendsList';
import { FollowSuggestionsList } from './FollowSuggestionsList';


export const Trending = () => {
    return (
        <>
            <div>
                <div className="search-box flex-align-center">
                    <SearchIcon />
                    <input placeholder="Search Twitter" className="search-input w-100" type="text" />
                </div>
                <div className="trends-list m-0">
                    <TrendsList />
                </div>
                <div className="follow-list">
                    <FollowSuggestionsList />
                </div>
            </div>
        </>
    )
}
