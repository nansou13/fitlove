import React from 'react'
import { STATIC_URL } from '../constants/globals'

export const UserBadge = ({ currentUser, id }) => {
  const imgBadge = {
    backgroundImage: currentUser
      ? `url(${STATIC_URL}${currentUser.id}/${currentUser.img[0]})`
      : null,
  }
  return (
    <div id={id} className="circle">
      <div className="circle profil_picture_img" style={imgBadge} />
    </div>
  )
}
