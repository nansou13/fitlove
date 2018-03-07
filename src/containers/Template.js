import React, { Component } from 'react'

export const Template = ({ appName, currentUser, children }) => (
  <div className="Template">
    <h1>{appName}</h1>
    {children}
  </div>
)
