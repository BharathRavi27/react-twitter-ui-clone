import React, { Component } from 'react';
import '../styles/TweetCard.css';
import { SmallAvatar } from '../images/avatars'
import { TweetCommentIcon, TweetRetweetIcon, TweetLikeIcon, TweetSendIcon } from '../images/svg/svgs';
import { Link } from 'react-router-dom';

export default class TweetCard extends Component {
    tweet = this.props.tweet;
    profImageurl = 'https://pbs.twimg.com/profile_images/1247964769669136385/KVCROk2D_bigger.jpg';

    handleRouting = (e) => {
        // e.preventDefault();
        // debugger
        // this.props.history.push('data')
    }
    render() {
        return (
            <Link to={`/status/${this.tweet.id}`}>
                <div className="tweet-card">
                    <div className="left">

                        <SmallAvatar width="48" image={this.tweet.user.image} />
                    </div>
                    <div className="right">
                        <div className="tweet-card-head">
                            <span className="tweet-card-name" onClick={this.handleRouting}>{this.tweet.user.name}</span>

                            <span className="tweet-card-handle" onClick={this.handleRouting}>{this.tweet.user.handle}</span>

                            <span className="tweet-card-time"> - {this.tweet.tweet.time}</span>
                        </div>
                        <div className="tweet-card-body">
                            <div className="tweet-card-content">
                                <p className="m-0">{this.tweet.tweet.content}</p>
                            </div>
                            <div className="tweet-card-image">
                                <img src={this.tweet.tweet.image} alt="" />
                            </div>
                            <div className="tweet-card-footer">
                                <span className="flex-align-center"><TweetCommentIcon /> <span className="tweet-cars-icon">{this.tweet.tweet.comments}</span></span>
                                <span className="flex-align-center"><TweetRetweetIcon /><span className="tweet-cars-icon">{this.tweet.tweet.retweets}</span></span>
                                <span className="flex-align-center"><TweetLikeIcon /><span className="tweet-cars-icon">{this.tweet.tweet.likes}</span></span>
                                <span className="flex-align-center"><TweetSendIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
