import React from 'react'
import { HeaderTpl } from './header'
import { FooterTpl } from './footer'

export const Template = ({ appName, currentUser, children, logout }) => (
  <div className="wrapper">
    <HeaderTpl appName={appName} currentUser={currentUser} logout={logout} />
    <div>{children}</div>
    <FooterTpl />
  </div>
)
