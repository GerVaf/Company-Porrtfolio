import React from 'react'
import Foot from './Foot'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Nav/>
      <Outlet />
      <Foot/>
    </div>
  )
}

export default Layout

