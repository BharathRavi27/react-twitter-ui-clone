import React from 'react'

export const SmallAvatar = ({ width, image }) => {
    return (
        <div className="avatar">
            <img width={width} src={image} alt="avatar" />
        </div>
    )
}
