import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function age(birthdate) {
  const birthday = new Date(birthdate.split('/'))
  return new Number(
    (new Date().getTime() - birthday.getTime()) / 31536000000
  ).toFixed(0)
}

const UserContent = props => {
  const { id, pseudo, imageProfile, birthdate, city } = props.user
  return (
    <div className="UserContent row">
      <Link to={`/user/${id}`} className="preview-link">
        <div className="__profilPhoto col-sm-4">
          <img src={`/img/${imageProfile}`} />
        </div>
        <div className="__profilInfo col-sm-8">
          <div>{pseudo}</div>
          <div>{age(birthdate)} ans</div>
          <div>{city}</div>
        </div>
      </Link>
    </div>
  )
}

export default class Brouillon extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="CreateProgram">
        <div className="container">
          <div className="row">
            {userList.map((user, i) => (
              <div key={user.id} className="col-xs-3 col-sm-4">
                <UserContent user={user} />
              </div>
            ))})}
          </div>
        </div>
      </div>
    )
  }
}

const userList = [
  {
    id: 1,
    pseudo: 'nansou',
    imageProfile: 'male.jpg',
    birthdate: '1986/03/18',
    city: 'Marseille',
  },
  {
    id: 2,
    pseudo: 'caro13',
    imageProfile: 'female.jpg',
    birthdate: '1985/12/21',
    city: 'Les milles',
  },
  {
    id: 3,
    pseudo: 'lenny',
    imageProfile: 'male.jpg',
    birthdate: '2015/07/06',
    city: 'Aix en provence',
  },
  {
    id: 4,
    pseudo: 'rino13',
    imageProfile: 'male.jpg',
    birthdate: '1960/07/06',
    city: 'Salon de provence',
  },
  {
    id: 5,
    pseudo: 'Scarlilluded97',
    imageProfile: 'female.jpg',
    birthdate: '1997/06/18',
    city: 'Marseille',
  },
  {
    id: 6,
    pseudo: 'Neigne79',
    imageProfile: 'male.jpg',
    birthdate: '1979/03/23',
    city: 'Les milles',
  },
  //    { id: 7, pseudo: 'Wassfilleach', imageProfile: 'male.jpg', birthdate: '1993/07/06', city: 'Aix en provence'},
  //    { id: 8, pseudo: 'Capon1945', imageProfile: 'male.jpg', birthdate: '1960/07/06', city: 'Salon de provence'},
]
