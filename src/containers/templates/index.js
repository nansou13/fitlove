import React from 'react'

import HeaderTpl from './header'
import FooterTpl from './footer'

const Template = ({ appName, currentUser, children, logout }) => (
  <div className="wrapper">
    <HeaderTpl appName={appName} currentUser={currentUser} logout={logout} />
    <div>{children}</div>
    <FooterTpl />
  </div>
)

export default Template
