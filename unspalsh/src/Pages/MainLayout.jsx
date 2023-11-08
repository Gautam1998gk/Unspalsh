import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../Components/Mainnavigation'

const MainLayout = () => {
  return (
    <div>
      <MainNavigation/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
