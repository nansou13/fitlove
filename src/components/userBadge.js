import React from 'react'
import classNames from 'classnames'
import { STATIC_URL } from '../constants/globals'

const UserBadge = ({ currentUser, className, ...props }) => {
  const imgBadge = {
    backgroundImage: currentUser
      ? `url(${STATIC_URL}${currentUser.id}/${currentUser.img[0]})`
      : null,
  }
  return (
    <div className={classNames('user_badge_img', className)} {...props}>
      <div className="user_badge_img_content">
        <div className="circle profil_picture_img" style={imgBadge} />
      </div>
    </div>
  )
}
export default UserBadge
