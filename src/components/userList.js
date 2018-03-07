import React from 'react'
import { Link } from 'react-router-dom'

import { STATIC_URL } from '../constants/globals'

export const User = ({
  content: { id, img, pseudo, age, birthdate, ville },
  className,
}) => {
  const backgroundImgUser = {
    backgroundImage: `url(http://api.gigan.fr/fitsocial/img/1_1/get?user=${id}&id=${
      img[0]
    })`,
  }
  return (
    <div className={className}>
      <Link to={`/user/${id}`}>
        <div className="bigBall">
          <div className="imgBlock">
            <div className="imgBlockContent circle" style={backgroundImgUser} />
          </div>
        </div>
      </Link>
      <h5 className="pseudo centered ballText">{pseudo}</h5>
      <p className="text-muted centered ballText">
        {age || calculate_age(birthdate)} ans - {ville}
      </p>
    </div>
  )
}

const calculate_age = birth => {
  if (birth) {
    const arrayBirth = birth.split('-')
    const [birth_year, birth_month, birth_day] = arrayBirth

    const today_date = new Date()
    const today_year = today_date.getFullYear()
    const today_month = today_date.getMonth()
    const today_day = today_date.getDate()
    let age = today_year - birth_year

    if (today_month < birth_month - 1) {
      age--
    }
    if (birth_month - 1 == today_month && today_day < birth_day) {
      age--
    }

    return age
  }
}
