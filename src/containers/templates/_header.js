import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

export const HeaderTpl = () => {
  const carouselProps = {
    showIndicators: false,
    showStatus: false,
    showThumbs: false,
  }
  return (
    <header id="header">
      <div className="slider">
        <Carousel {...carouselProps}>
          <div>
            <img src="http://placehold.it/1200x400/F34336/F34336&text=WORDPRESS THEME DEVELOPER" />
          </div>
          <div>
            <img src="http://placehold.it/1200x400/20BFA9/ffffff&text=CLEAN %26 SMART" />
          </div>
          <div>
            <img src="http://placehold.it/1200x400/F34336/F34336&text=WORDPRESS THEME DEVELOPER" />
          </div>
        </Carousel>
      </div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#mainNav"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <img
              className="img-responsive"
              src="http://rolyart.ro/wp-content/uploads/2016/07/roland-maruntelu-freelancer-romania.jpg"
            />
          </a>
          <span className="site-name">
            <b>Roland</b> Maruntelu
          </span>
          <span className="site-description">worpress theme developer</span>
        </div>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="nav main-menu navbar-nav">
            <li>
              <a href="#">
                <i className="fa fa-home" /> HOME
              </a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>

          <ul className="nav  navbar-nav navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
