import React from 'react'

import { STATIC_URL } from '../../constants/globals'

import { UserBadge } from '../../components/userBadge'

export const HeaderTpl = ({ appName, currentUser, logout }) => (
  <header id="header">
    <nav className="navbar navbar-default menu">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="">
            {appName}
          </a>
        </div>
        <div className="miniMenu">
          {currentUser && (
            <ul className="nav navbar-nav navbar-left main-menu">
              <li className="dropdown">
                <UserBadge
                  currentUser={currentUser}
                  id="miniMenu_Profil_picture_main"
                />
              </li>
              <li className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={logout}
                >
                  {currentUser.pseudo}{' '}
                  <span>
                    <img src="img/down-arrow.png" alt="" />
                  </span>
                </a>
                <ul className="dropdown-menu newsfeed-home">
                  <li>
                    <a href="index.html">Landing Page 1</a>
                  </li>
                  <li>
                    <a href="index-register.html">Landing Page 2</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown">
                <a href="">
                  <span className="icon ion-eye" aria-hidden="true" />
                  <span className="badge">4</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span className="icon ion-email" aria-hidden="true" />
                  <span className="badge">4</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span className="icon ion-ios-heart" aria-hidden="true" />
                  <span className="badge">4</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span className="icon ion-star" aria-hidden="true" />
                  <span className="badge">4</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span className="icon ion-ios-locked" aria-hidden="true" />
                  <span className="badge">4</span>
                </a>
              </li>
            </ul>
          )}
        </div>
        <form className="navbar-form navbar-right">
          <div className="form-group">
            <i className="glyphicon glyphicon-search" />
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher une personne..."
            />
          </div>
        </form>
      </div>
    </nav>
  </header>
)
