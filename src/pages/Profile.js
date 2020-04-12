import React from 'react';
import { ProfileHead } from '../components/profile/ProfileHead';
import { ProfileDetails } from '../components/profile/ProfileDetails';
import '../styles/Profile.css';

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-head">
                <ProfileHead />
            </div>
            <div className="profile-details">
                <ProfileDetails />
            </div>
        </div>
    )
}
