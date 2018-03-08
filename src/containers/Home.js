import React, { Component } from 'react'
import { connect } from 'react-redux'

import agent from '../agent'

import { LOGOUT, GET_USERS_LIST } from '../constants/actionTypes'

import { STATIC_URL } from '../constants/globals'

import { UserBadge } from '../components/userBadge'
import { User } from '../components/userList'

import { Col, Container, Row } from '@nans13/react-bs-grid'

const mapStateToProps = ({
  common: { appLoaded, currentUser },
  users: { list: userList },
}) => ({
  appLoaded,
  currentUser,
  userList,
})

const mapDispatchToProps = dispatch => ({
  onClickLogout: e => {
    e.preventDefault()
    dispatch({ type: LOGOUT })
  },
  onLoad: payload => dispatch({ type: GET_USERS_LIST, payload }),
})

class Home extends Component {
  componentWillMount() {
    const { onLoad, currentUser } = this.props
    onLoad(currentUser ? agent.Users.gets() : null)
  }

  constructor(props) {
    super(props)
    this.state = {
      salles: [
        {
          id: 1,
          name: 'Fitness Park Plan de campagne',
          members: 17,
          city: 'Cabriès',
          img:
            'https://lh5.googleusercontent.com/p/AF1QipOiEh_Nbzlur_oSGQuHvYFem_27ZeMBUjZkmsp1=w408-h304-k-no',
        },
        {
          id: 2,
          name: 'Fitness Park Terasses du port',
          members: 3,
          city: 'Marseille 2',
          img:
            'https://lh5.googleusercontent.com/p/AF1QipPfQlp4Uz36kg-RMG1JrPODcKawyLxhWvFeWkLn=w408-h725-k-no',
        },
        {
          id: 3,
          name: 'Virtus CrossFit',
          members: 5,
          city: 'Marseille 2',
          img:
            'https://lh5.googleusercontent.com/p/AF1QipNFqmVJrX6XyPI74BwQQiKbUe8ds2Rr29BSphmY=w408-h229-k-no',
        },
        {
          id: 4,
          name: 'Keep Cool PDC',
          members: 12,
          city: 'Cabriès',
          img:
            'https://lh5.googleusercontent.com/p/AF1QipNCeSDjCiuk_iA_A7A3qiXc_m6SKF0a55E6U0I5=w408-h229-k-no',
        },
      ],
    }
  }

  render() {
    // const leftMenu_profil = {
    //     backgroundImage: "url(https://www.heyuguys.com/images/2015/10/Back-to-the-Future-Promo-Photo.jpg)"
    //  }

    const { salles, topUsers } = this.state
    const { currentUser, onClickLogout, userList } = this.props

    const leftMenu_profil = {
      backgroundImage: currentUser
        ? `url(${STATIC_URL}${currentUser.img[0]})`
        : null,
    }
    return (
      <Container className="homePage">
        <Row>
          <Col md={3} xsHidden smHidden className="left-content-site">
            <div id="profile-card">
              <UserBadge currentUser={currentUser} id="profil_picture_main" />
              <div className="profile_name">
                <h5>{currentUser.pseudo}</h5>
                <p>
                  <a href="" onClick={onClickLogout}>
                    (deconnection)
                  </a>
                </p>
              </div>
            </div>
            <LeftMenu />
          </Col>
          <Col md={7} className="content-site">
            <div className="lineContents bottom-separator">
              <h4>
                <i className="icon ion-navigate" />
                Salles proches de vous
              </h4>
              <div className="row rowContent">
                {salles.slice(0, 3).map((salle, i) => {
                  const backgroundImgSalle = {
                    backgroundImage: `url(${salle.img})`,
                  }
                  return (
                    <SalleContent
                      salle={salle}
                      bgImg={backgroundImgSalle}
                      key={`gym(${salle.id})`}
                    />
                  )
                })}
              </div>
            </div>
            <div className="lineContents bottom-separator">
              <h4>
                <i className="icon ion-ribbon-b" />
                TOP users
              </h4>
              <Row className="rowContent">
                {userList &&
                  userList.map((user, i) => (
                    <User
                      content={user}
                      key={`userlist-${user.id}`}
                      className="col-xs-3 usersLine"
                    />
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

const SalleContent = ({ salle: { id, members, name, city }, bgImg }) => (
  <Col xs={4}>
    <div className="bigBall">
      <div className="imgBlock">
        <div className="imgBlockContent circle" style={bgImg}>
          <div className="circle bigBallInfo">
            <div className="circle greyBorder under">
              <div>
                <div className="member">members</div>
                <div className="beBold">{members}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className="ballText">{name}</h5>
      <p className="ballText">{city}</p>
      <p className="text-muted ballText">{members} membres</p>
    </div>
  </Col>
)

const LeftMenu = props => (
  <div className="myNav">
    <ul>
      <li className="bottom-separator">
        <i className="icon ion-ios-search" />
        <div>
          <a href="">Rechercher</a>
        </div>
      </li>
      <li className="bottom-separator news">
        <i className="icon ion-email" />
        <div>
          <a href="">
            Mes messages <span className="badge">4</span>
          </a>
        </div>
      </li>
      <li className="bottom-separator">
        <i className="icon ion-eye" />
        <div>
          <a href="">Visiteurs</a>
        </div>
      </li>
      <li className="bottom-separator">
        <i className="icon ion-ios-heart" />
        <div>
          <a href="">Coup de coeurs</a>
        </div>
      </li>
      <li className="bottom-separator">
        <i className="icon ion-star" />
        <div>
          <a href="">Mes favoris</a>
        </div>
      </li>
      <li className="bottom-separator">
        <i className="icon ion-ios-locked" />
        <div>
          <a href="">Mes accès privés</a>
        </div>
      </li>
    </ul>
  </div>
)

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
